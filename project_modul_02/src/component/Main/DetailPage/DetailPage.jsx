import React, { useEffect, useState } from "react";
import HeaderPage from "../../Layout/Hearder/HeaderPage";
import FooterPage from "../../Layout/Footer/FooterPage";
import axios from "axios";
import "./Detail.css";
function DetailPage() {
  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8888/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  const handleProduct = (id) => {
    window.location.href = `/product/${id}`;
  };

  const [cart, setCart] = useState([]);
  const userLogins = JSON.parse(localStorage.getItem("userLogin"));

  useEffect(() => {
    const userLogins = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogins.user && userLogins.user.id) {
      axios
        .get(`http://localhost:8888/users/${userLogins.user.id}`)
        .then((res) => setCart(res.data.cart))
        .catch((err) => console.log(err));
    }
  }, [status]);

  const handleCart = async (item) => {
    const existingProduct = cart.find((product) => product.id === item.id);
    if (existingProduct) {
      alert("Sản phẩm đã có trong giỏ hàng");
    } else {
      const updatedCart = [...cart, { ...item, count: 1 }];
      console.log(updatedCart);
      try {
        await axios.patch(`http://localhost:8888/users/${userLogins.user.id}`, {
          cart: updatedCart,
        });
        setStatus(!status);
      } catch (error) {
        console.log("pacth", error);
      }
      alert(`Đã thêm ${item.name} vào giỏ hàng`);
    }
  };

  return (
    <div>
      <HeaderPage />
      <section className="menu-section" id="menu">
        <div className="container-fluid container-sm">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title">
                <h2 className="mb-3 mb-md-0">Thực đơn</h2>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="search">
                <form>
                  <input
                    type="search"
                    id="search"
                    placeholder="search foods.."
                  />
                  <label htmlFor="search">
                    <i className="fa-solid fa-magnifying-glass" />
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="menu-content">
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    {product.map((item) => (
                      <div
                        className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                        key={item.id}
                      >
                        <div className="product text-center">
                          <div
                            className="image"
                            onClick={() => handleProduct(item.id)}
                          >
                            <img
                              className="img-fluid"
                              src={item.image[1]}
                              alt=""
                            />
                          </div>
                          <h4>{item.name}</h4>
                          <p>
                            Thành phần nguyên liệu tự nhiên, không hóa chất bảo
                            quản, đảm bảo vệ sinh an toàn thực phẩm. Bảo quản
                            nơi khô ráo, tránh nơi ẩm mốc, tránh ánh nắng trực
                            tiếp.
                          </p>
                          <div className="pricing">
                            <span className="price">
                              {item.price.toLocaleString("vi-VN")} đ
                            </span>
                            <div className="start">
                              <i className="fa-solid fa-star" />
                              5.0
                            </div>
                          </div>
                          <div
                            className="basket"
                            onClick={() =>
                              window.confirm(
                                "Bạn có đồng ý thêm sản phẩm này vào giỏ hàng? Máy chủ hơi cùi xin quý khách thêm từ từ !!!"
                              ) && handleCart(item)
                            }
                          >
                            <i className="fa fa-basket-shopping" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </div>
  );
}

export default DetailPage;
