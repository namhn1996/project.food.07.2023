import React, { useEffect, useState } from "react";
import "./Cart.css";
import HeaderPage from "../../Layout/Hearder/HeaderPage";
import FooterPage from "../../Layout/Footer/FooterPage";
import axios from "axios";
function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userLogins = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogins && userLogins.id) {
      axios
        .get(`http://localhost:8888/users/${userLogins.id}`)
        .then((res) => setCart(res.data.cart))
        .catch((err) => console.log(err));
    }
  }, []);
  console.log(cart);
  const sum = cart.reduce((total, item) => total + item.price * item.count, 0);
  const sumVnd = sum.toLocaleString("vi-VN");
  const tax = (sum * 5) / 100;
  const handlePre = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
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
    });
  };
  const handlePlus = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
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
    });
  };
  const handleRemove = (id) => {
    setCart((prevCart) => {
      console.log(prevCart);
      return prevCart.filter((item) => item.id !== id);
      
    });
  };
  console.log(cart);
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
            {cart.map((item) => (
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
                  <span className="qt-minus" onClick={() => handlePre(item.id)}>
                    -
                  </span>
                  <span className="qt">{item.count}</span>
                  <span className="qt-plus" onClick={() => handlePlus(item.id)}>
                    +
                  </span>
                  <span className="storge"> Kho hàng :{item.limit}</span>
                  <h2 className="full-price">
                    {(item.price * item.count).toLocaleString("vi-VN")} đ
                  </h2>
                  {/* <h2 className="price">14.99€</h2> */}
                </footer>
              </article>
            ))}
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
              <a className="btn">Đặt hàng</a>
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
