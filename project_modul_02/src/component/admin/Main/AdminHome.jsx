import React from "react";
import "./Admin.css";
import AdminUser from "./AdminUser";
import AdminProducts from "./AdminProducts";
import AdminCart from "./AdminCart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function AdminHome() {
  return (
    <div>
      <div className="container-sm">
        <div className="row">
          <div className="col-md-3">
            <ul className="navv nav-pills nav-stacked">
              <li className="active">
                <Link to="/admin">
                  <i className="fa fa-home fa-fw" />
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/aduser">
                  <i className="fa fa-list-alt fa-fw" />
                  Quản lý tài khoản
                </Link>
              </li>
              <li>
                <Link to="/adproducts">
                  <i className="fa fa-file-o fa-fw" />
                  Quản lý thực đơn
                </Link>
              </li>
              <li>
                <Link to="/adcart">
                  <i className="fa fa-bar-chart-o fa-fw" />
                  Quản lý đơn hàng
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-9 well">
            <h1 className="title">Chào mừng bạn đến với bình nguyên vô tận</h1>
            <Routes>
              <Route exact path="/admin" Component={<AdminHome />} />
              <Route path="/aduser" Component={<AdminUser />} />
              <Route path="/adproducts" Component={<AdminProducts />} />
              <Route path="/adcart" Component={<AdminCart />} />
            </Routes>
  
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
