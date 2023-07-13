import React, { useEffect, useState } from "react";
import "./Cart.css";
import HeaderPage from "../../Layout/Hearder/HeaderPage";
import FooterPage from "../../Layout/Footer/FooterPage";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const userLogins = JSON.parse(localStorage.getItem("userLogin"));

  useEffect(() => {
    if (userLogins && userLogins.user.id) {
      axios
        .get(`http://localhost:8888/users/${userLogins.user.id}`)
        .then((res) => {
          setUser(res.data);
          setCart(res.data.cart);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const sum = cart.reduce((total, item) => total + item.price * item.count, 0);
  const sumVnd = sum.toLocaleString("vi-VN");
  const tax = (sum * 5) / 100;
  const handlePre = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1;
          if (newCount < 1) {
            return item; // Giữ nguyên số lượng nếu số lượng sẽ nhỏ hơn 1
          }
          return {
            ...item,
            count: newCount,
          };
        }
        return item;
      });

      axios
        .patch(`http://localhost:8888/users/${userLogins.user.id}`, {
          cart: newCart, // Cập nhật giá trị mới của cart
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });

      return newCart;
    });
  };

  const handlePlus = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        if (item.id === id) {
          const newCount = item.count + 1;
          if (newCount > item.limit) {
            return item; // Giữ nguyên số lượng nếu số lượng vượt quá giới hạn
          }
          return {
            ...item,
            count: newCount,
          };
        }
        return item;
      });

      axios
        .patch(`http://localhost:8888/users/${userLogins.user.id}`, {
          cart: newCart, // Cập nhật giá trị mới của cart
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });

      return newCart;
    });
  };
  const handleRemove = (id) => {
    const deleteCart = cart.filter((item) => item.id !== id);
    setCart(deleteCart);
    axios
      .patch(`http://localhost:8888/users/${userLogins.user.id}`, {
        cart: deleteCart,
      })
      .then(() => {
        alert("xóa thành công");
      })
      .catch((err) => {
        alert("xóa thất bại");
      });
  };
  const handleSubmitCart = () => {
    axios
      .patch(`http://localhost:8888/users/${userLogins.user.id}`, {
        oders: [...user.oders, cart],
        cart: [],
      })
      .then(() => {
        alert("thanh toán thành công");
        window.location.reload();
      })
      .catch((err) => {
        alert("thanh toán thất bại");
      });
  };
  return (
    <div>
      <HeaderPage />
      <main>
        {/* Start DEMO HTML (Use the following code into your project)*/}
        <header id="site-header">
          <div className="container">
            <h1>
              Shopping cart <span>[</span> <em>by NaTra Food</em>{" "}
              <span className="last-span is-open">]</span>
            </h1>
          </div>
        </header>
        <div className="container">
          <section id="cart">
            {cart ? (
              cart.map((item) => (
                <article className="product" key={item.id}>
                  <header>
                    <a className="remove" onClick={() => handleRemove(item.id)}>
                      <img src={item.image[2]} alt="Gamming Mouse" />
                      <h3>Xóa Sản phẩm</h3>
                    </a>
                  </header>
                  <div className="content">
                    <h1>{item.name}</h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, numquam quis perspiciatis ea ad omnis provident
                    laborum dolore in atque.
                  </div>
                  <footer className="content">
                    <span
                      className="qt-minus"
                      onClick={() => handlePre(item.id)}
                    >
                      -
                    </span>
                    <span className="qt">{item.count}</span>
                    <span
                      className="qt-plus"
                      onClick={() => handlePlus(item.id)}
                    >
                      +
                    </span>
                    <span className="storge"> Kho hàng :{item.limit}</span>
                    <h2 className="full-price">
                      {(item.price * item.count).toLocaleString("vi-VN")} đ
                    </h2>
                    {/* <h2 className="price">14.99€</h2> */}
                  </footer>
                </article>
              ))
            ) : (
              <h1 style={{ textAlign: "center" }}>Giỏ hàng rỗng</h1>
            )}
          </section>
        </div>
        <footer id="site-footer">
          <div className="container clearfix">
            <div className="left">
              <h2 className="subtotal">
                Tạm tính : <span>{sumVnd}</span> đ
              </h2>
              <h3 className="tax">
                Thuế (5%): <span>{tax.toLocaleString("vi-VN")}</span> đ
              </h3>
              <h3 className="shipping">
                Phí vận chuyển : <span>Free</span>
              </h3>
            </div>
            <div className="right">
              <h1 className="total">
                Tổng cộng: <span>{(sum + tax).toLocaleString("vi-VN")}</span>đ
              </h1>
              <button onClick={handleSubmitCart} className="btn btn-danger">
                Đặt hàng
              </button>
            </div>
          </div>
        </footer>
        {/* END EDMO HTML (Happy Coding!)*/}
      </main>

      <FooterPage />
    </div>
  );
}

export default CartPage;
