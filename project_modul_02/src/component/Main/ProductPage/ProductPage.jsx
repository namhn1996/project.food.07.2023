import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import HeaderPage from "../../Layout/Hearder/HeaderPage";
import FooterPage from "../../Layout/Footer/FooterPage";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const [productItem, setProductsItem] = useState([]);
  const products = useParams();
  const id = products.id;
  useEffect(() => {
    axios
      .get(`http://localhost:8888/products/${id}`)
      .then((res) => setProductsItem(res.data))
      .catch((err) => console.log("err", err));
  }, []);
  console.log(productItem);

  
  return (
    <div>
      <HeaderPage />

      <div className="card-wrapper">
        <div className="card">
          {/* card left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src="" alt="shoe imagee" />
                <img src="" alt="shoe image" />
                <img src="" alt="shoe image" />
                <img src="" alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#">
                  <img src="" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#">
                  <img src="" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#">
                  <img src="" alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#">
                  <img src='' alt="shoe image" />
                </a>
              </div>
            </div>
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title"></h2>
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
                Giá gốc: <span> đ</span>
              </p>
              <p className="new-price">
                Giá khuyến mãi: <span> đ (13%)</span>
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
              <input type="number" min={0} defaultValue={1} />
              <span>
                {" "}
                <b>Kho hàng :</b> 99
              </span>{" "}
              <br />
              <button type="button" className="btn">
                <i className="fas fa-shopping-cart" /> Thêm vào giỏ hàng
              </button>
              <button type="button" className="btn">
                Mua ngay
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
