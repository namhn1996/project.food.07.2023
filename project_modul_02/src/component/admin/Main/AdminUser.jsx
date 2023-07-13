import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import axios from "axios";
function AdminUser() {
  const [isStatus, setIsStatus] = useState(true);
  const [userLogins, setUserLogins] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:8888/users").then((res) => {
      setUserLogins(res.data);
    });
  }, []);
  const handleLog = async (id) => {
    const updatedUserLogins = userLogins.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          status: false,
        };
      }
      return user;
    });

    setUserLogins(updatedUserLogins);

    await axios.patch(`http://localhost:8888/users/${id}`, {
      status: false,
    });
  };
  const handleUnlog = async (id) => {
    const updatedUserLogins = userLogins.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          status: true,
        };
      }
      return user;
    });

    setUserLogins(updatedUserLogins);

    await axios.patch(`http://localhost:8888/users/${id}`, {
      status: true,
    });
  };
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
            <div className="account">
              <h1>Quản Lý Tài Khoản</h1>
              <table>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Trạng thái</th>
                    <th>Action</th>
                  </tr>
                </tbody>
                <tbody className="acc-table">
                  {userLogins.map((user) => (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.confirmPassword}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>
                        {user.status == true ? "Đang hoạt động" : "Đã khóa"}
                      </td>
                      <td>
                        <button
                          style={{
                            backgroundColor: isStatus ? "none" : "red",
                            color: isStatus ? "black" : "white",
                          }}
                          onClick={() => handleLog(user.id)}
                        >
                          Khóa
                        </button>
                        <button
                          style={{
                            backgroundColor: !isStatus ? "green" : "none",
                            color: !isStatus ? "white" : "black",
                          }}
                          onClick={() => handleUnlog(user.id)}
                        >
                          Mở
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
