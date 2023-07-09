import React, { useEffect, useState } from "react";
import "./Cart.css";
import HeaderPage from "../../Layout/Hearder/HeaderPage";
import FooterPage from "../../Layout/Footer/FooterPage";
function CartPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("userLogin"));
    setProduct(cart.cart);
  }, []);
  console.log(product);
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
            {product.map((item) => (
              <article className="product" key={item.id}>
                <header>
                  <a className="remove">
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
                    onClick={()=>console.log("---")}
                  >
                    -
                  </span>
                  <span className="qt">{item.count}</span>
                  <span
                    className="qt-plus"
                    onClick={(e)=>console.log("++" + e.target)}
                  >
                    +
                  </span>
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
                Tạm tính : <span>163.96</span>€
              </h2>
              <h3 className="tax">
                Thuế (5%): <span>8.2</span>€
              </h3>
              <h3 className="shipping">
                Phí vận chuyển: <span>5.00</span>€
              </h3>
            </div>
            <div className="right">
              <h1 className="total">
                Tổng cộng: <span>177.16</span>€
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
