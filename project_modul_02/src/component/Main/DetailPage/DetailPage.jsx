import React from "react";

function DetailPage() {
  return (
    <div>
      <section className="menu" id="menu">
        <div className="container">
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
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <div className="image">
                          <img
                            className="img-fluid"
                            src="./img/tron thap cam 1.jpg"
                            alt=""
                          />
                        </div>
                        <h4>Bánh tráng trộn thập cẩm</h4>
                        <p>
                          Thành phần nguyên liệu tự nhiên, không hóa chất bảo
                          quản, đảm bảo vệ sinh an toàn thực phẩm. Bảo quản nơi
                          khô ráo, tránh nơi ẩm mốc, tránh ánh nắng trực tiếp.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai cha bong 1.jpg"
                          alt=""
                        />
                        <h4>Vegetable pizza</h4>
                        <p>
                          Thành phần nguyên liệu tự nhiên, không hóa chất bảo
                          quản, đảm bảo vệ sinh an toàn thực phẩm. Bảo quản nơi
                          khô ráo, tránh nơi ẩm mốc, tránh ánh nắng trực tiếp.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai ga quay 1.jpg"
                          alt=""
                        />
                        <h4>Pies stuffed with meat</h4>
                        <p>
                          Thành phần nguyên liệu tự nhiên, không hóa chất bảo
                          quản, đảm bảo vệ sinh an toàn thực phẩm. Bảo quản nơi
                          khô ráo, tránh nơi ẩm mốc, tránh ánh nắng trực tiếp.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <div>
                          <img
                            className="img-fluid"
                            src="./img/pho mai ga quay 1.jpg"
                            alt=""
                          />
                        </div>
                        <h4>Mortadella sandwich</h4>
                        <p>
                          Thành phần nguyên liệu tự nhiên, không hóa chất bảo
                          quản, đảm bảo vệ sinh an toàn thực phẩm. Bảo quản nơi
                          khô ráo, tránh nơi ẩm mốc, tránh ánh nắng trực tiếp.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai ga quay 1.jpg"
                          alt=""
                        />
                        <h4>Crispy fries</h4>
                        <p>
                          Thành phần nguyên liệu tự nhiên, không hóa chất bảo
                          quản, đảm bảo vệ sinh an toàn thực phẩm. Bảo quản nơi
                          khô ráo, tránh nơi ẩm mốc, tránh ánh nắng trực tiếp.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai ga quay 1.jpg"
                          alt=""
                        />
                        <h4>Corn pizza</h4>
                        <p>
                          Thành phần nguyên liệu tự nhiên, không hóa chất bảo
                          quản, đảm bảo vệ sinh an toàn thực phẩm. Bảo quản nơi
                          khô ráo, tránh nơi ẩm mốc, tránh ánh nắng trực tiếp.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <div>
                          <img
                            className="img-fluid"
                            src="./img/pho mai ga quay 1.jpg"
                            alt=""
                          />
                        </div>
                        <h4>Samosa with meat</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Totam repellat enim rerum.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai ga quay 1.jpg"
                          alt=""
                        />
                        <h4>Double burger</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Totam repellat enim rerum.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai ga quay 1.jpg"
                          alt=""
                        />
                        <h4>beef burger</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Totam repellat enim rerum.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <div>
                          <img
                            className="img-fluid"
                            src="./img/pho mai ga quay 1.jpg"
                            alt=""
                          />
                        </div>
                        <h4>Double burger</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Totam repellat enim rerum.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai ga quay 1.jpg"
                          alt=""
                        />
                        <h4>Crispy fries</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Totam repellat enim rerum.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="product text-center">
                        <img
                          className="img-fluid"
                          src="./img/pho mai ga quay 1.jpg"
                          alt=""
                        />
                        <h4>Corn pizza</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Totam repellat enim rerum.
                        </p>
                        <div className="pricing">
                          <span className="price">$15</span>
                          <div className="start">
                            <i className="fa-solid fa-star" />
                            5.0
                          </div>
                        </div>
                        <div className="basket">
                          <i className="fa fa-basket-shopping" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="btn col-12 text-center mt-5">
              <button className="main-btn mt-5 mx-auto">viow all</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;
