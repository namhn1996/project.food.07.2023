import axios from "axios";
import React, { useEffect } from "react";
import HeaderPage from "../../Layout/Hearder/HeaderPage";
import FooterPage from "../../Layout/Footer/FooterPage";
import "./style.css";
function HomePage() {
  useEffect(() => {});
  return (
    <div>
      <HeaderPage />
      <section className="home text-center" id="home" style={{marginTop: "100px"}}>
        <div className="container ">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="home__info text-lg-start mb-5 mb-lg-0">
                <h1>
                  Bánh Tráng
                  <br />
                  Trộn Các Vị
                </h1>
                <p className="lh-lg my-4">
                  Sản phẩm của chúng tôi được chế biến từ những nguyên liệu tươi
                  ngon nhất, không chất bảo quản, đảm bảo vệ sinh an toàn thực
                  phẩm
                </p>
                <a href="#" className="main-btn mx-auto mx-lg-0">
                  Đặt hàng ngay
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home__image">
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./img/1.png"
                        className="img-fluid d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/2.jpg"
                        className="img-fluid d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/3.jpg"
                        className="img-fluid d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./img/4.jpg"
                        className="img-fluid d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="categories-food mt-5 text-center">
            <div className="row justify-content-between align-items-center">
              <div className="col-sm-6 col-md-4 col-lg-3 mb-lg-0">
                <div className="category-box py-4 mb-4 mb-lg-0">
                  <div className="info">
                    <img src="./img/tron thap cam 1.jpg" alt="" />
                    <h3>Bánh tráng trộn thập cẩm</h3>
                    <div className="stars my-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                    </div>
                    <div className="footer d-flex align-items-center justify-content-center">
                      <span className="price pe-4">$20.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mb-lg-0">
                <div className="category-box py-4 mb-4 mb-lg-0">
                  <div className="info">
                    <img src="./img/pho mai cha bong 4.jpg" alt="" />
                    <h3>Phô mai chà bông</h3>
                    <div className="stars my-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                    </div>
                    <div className="footer d-flex align-items-center justify-content-center">
                      <span className="price pe-4">$20.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mb-lg-0">
                <div className="category-box py-4 mb-4 mb-lg-0">
                  <div className="info">
                    <img src="./img/sa te bo cay 1.jpg" alt="" />
                    <h3>Sa Tế bò cay</h3>
                    <div className="stars my-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                    </div>
                    <div className="footer d-flex align-items-center justify-content-center">
                      <span className="price pe-4">$20.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mb-lg-0">
                <div className="category-box py-4">
                  <div className="info">
                    <img src="./img/thap cam ngu vi 1.jpg" alt="" />
                    <h3>Thập cẩm ngũ vị</h3>
                    <div className="stars my-3">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                    </div>
                    <div className="footer d-flex align-items-center justify-content-center">
                      <span className="price pe-4">$20.00</span>
                    </div>
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

export default HomePage;
