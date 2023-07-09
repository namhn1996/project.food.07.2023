import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import "./style.css";

function HeaderPage() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const userStatus = JSON.parse(localStorage.getItem("userStatus"));

  const handleLogout = async () => {
    await axios.patch(`http://localhost:8888/users/${userLogin.id}`);

    localStorage.setItem("userLogin", JSON.stringify(""));
    localStorage.setItem("userStatus", JSON.stringify(false));
    window.location.reload();
  };
  const handleCart = () => {
    userStatus == true
      ? (window.location.href = "/cart")
      : alert("Chưa đăng nhập");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky" id="navbar">
        <div className="container">
          <Link className="navbar-brand logo" to="/home">
            NaTra Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars menu-btn" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link mt-4 mt-lg-0 mb-2 mb-md-0" to="/home">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mb-2 mb-md-0" to="/detail">
                  Thực đơn
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-2 mb-md-0" href="">
                  Cửa hàng
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-center shop">
              <div className="shooping me-5 d-none d-lg-inline-block">
                <i
                  onClick={handleCart}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="fa-solid fa-cart-shopping"
                />
              </div>
              <li className="nav-item">
                {userStatus == true ? (
                  <li>
                    <div className="profile">
                      <img src="./img/1.png" alt="Profile Picture" />
                      <p>Xin chào, {userLogin.name}</p>

                      <button
                        onClick={handleLogout}
                        className="main-btn my-4 my-lg-0 logout-btn"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </li>
                ) : (
                  <Link to="/login" className="main-btn my-4 my-lg-0">
                    Đăng nhập
                  </Link>
                )}
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderPage;
