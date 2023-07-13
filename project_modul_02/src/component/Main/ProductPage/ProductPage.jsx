import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import HeaderPage from "../../Layout/Hearder/HeaderPage";
import FooterPage from "../../Layout/Footer/FooterPage";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const [productItem, setProductsItem] = useState([]);
  const [showProductImgs, setShowProductImgs] = useState(false);
  const [count, setCount] = useState("");
  const [cart, setCart] = useState([]);
  const userLogins = JSON.parse(localStorage.getItem("userLogin"));
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8888/products/${id}`)
      .then((res) => setProductsItem(res.data))
      .catch((err) => console.log("err", err));
    const userLogins = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogins.user && userLogins.user.id) {
      axios
        .get(`http://localhost:8888/users/${userLogins.user.id}`)
        .then((res) => setCart(res.data.cart))
        .catch((err) => console.log(err));
    }
  }, [id]);
  console.log(productItem);
  const handleImgSelectClick = () => {
    setShowProductImgs(!showProductImgs);
  };
  console.log(count);

  return (
    <div>
      <HeaderPage />

      <div className="card-wrapper">
        <div className="card">
          {/* card left */}
          <div className="product-imgs">
            {productItem.image && (
              <div className="img-display">
                <div className="img-showcase">
                  <img src={productItem.image[0]} alt="shoe imagee" />
                  <img src={productItem.image[1]} alt="shoe image" />
                  <img src={productItem.image[2]} alt="shoe image" />
                  <img src={productItem.image[3]} alt="shoe image" />
                </div>
              </div>
            )}

            {productItem.image && (
              <div className="img-select">
                <div className="img-item" onClick={handleImgSelectClick}>
                  <a href="#">
                    <img src={productItem.image[0]} alt="shoe image" />
                  </a>
                </div>
                <div className="img-item" onClick={handleImgSelectClick}>
                  <a href="#">
                    <img src={productItem.image[1]} alt="shoe image" />
                  </a>
                </div>
                <div className="img-item" onClick={handleImgSelectClick}>
                  <a href="#">
                    <img src={productItem.image[2]} alt="shoe image" />
                  </a>
                </div>
                <div className="img-item" onClick={handleImgSelectClick}>
                  <a href="#">
                    <img src={productItem.image[3]} alt="shoe image" />
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title">{productItem.name}</h2>
            <a href="#" className="product-link">
              natra food
            </a>
            <div className="product-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>4.7(21)</span>
            </div>
            <div className="product-price">
              <p className="last-price">
                Giá sản phẩm: <span> {productItem.price} đ</span>
              </p>
            </div>
            <div className="product-detail">
              <h2>Chi tiết sản phẩm:</h2>
              <p>
                <b>BÁNH TRÁNG TRỘN Natra Food</b> <br />
                <b>- Thành phần :</b> GIA VỊ NHƯ MUỐI, ĐƯỜNG, BỘT NGỌT, HÀNH
                PHI, TỎI PHI,V.V...
                <br />
                <b>- Hướng dẫn sử dụng :</b> Sử dụng ăn trực tiếp
                <br />
                <b>- Hướng dẫn bảo quản :</b> Nhiệt độ thường, nơi khô ráo,
                thoáng mát
                <br />
                <b>- Trọng lượng tịnh :</b> 100g
                <br />
                <b>- Hạn sử dụng :</b> 1-2 tháng
                <br />
                <b>- Ngày sản xuất :</b> In trên bao bì
                <br />
              </p>
              <p>
                <b>Natra Food</b>
                <br />
                Based in Hanoi, Vietnam
                <br />
                <b>Hotline :</b> 034 66 888 96
                <br />
                <b>Fanpage :</b>
                <a href="https://www.facebook.com/natrafoods9698">
                  https://www.facebook.com/natrafoods9698
                </a>
                <br />
              </p>
            </div>
            <div className="purchase-info">
              <label htmlFor="">
                <b>Số lượng :</b>
              </label>
              <input
                type="number"
                min={0}
                defaultValue={1}
                onChange={(e) => setCount(e.target.value)}
              />
              <span>
                {" "}
                <b>Kho hàng :</b> {productItem.limit}
              </span>{" "}
              <br />
              <button
                type="button"
                className="btn"
                style={{ width: "70%" }}
                onClick={() =>
                  window.confirm(
                    "Bạn có đồng ý thêm sản phẩm này vào giỏ hàng"
                  ) &&
                  cart.push({
                    id: productItem.id,
                    name: productItem.name,
                    image: productItem.image,
                    price: productItem.price,
                    count: count,
                  })
                }
              >
                <i className="fas fa-shopping-cart" /> Thêm vào giỏ hàng
              </button>
            </div>
            <div className="social-links">
              <p>Share At: </p>
              <a href="https://www.facebook.com/natrafoods9698">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

export default ProductPage;
