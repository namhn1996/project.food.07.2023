import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import axios from "axios";
function AdminCart() {
  const [oder, setOder] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:8888/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  console.log(users);
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
            <div className="oder">
              <h1>Quản lý Đơn hàng</h1>
              <table>
                <tbody>
                  <tr>
                    <th>Id User</th>
                    <th>Name</th>
                    <th>Địa chỉ</th>
                    <th>Email khách hàng</th>
                    <th>Oder</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Tổng tiền</th>
                    <th>Action</th>
                  </tr>
                </tbody>
                <tbody className="odertable">
                  {users.map((user, userIndex) => (
                    <>
                      {user.oders.map((order, orderIndex) => (
                        <React.Fragment key={orderIndex}>
                          <tr>
                            {orderIndex === 0 && (
                              <>
                                <td rowSpan={user.oders.length}>{user.id}</td>
                                <td rowSpan={user.oders.length}>{user.name}</td>
                                <td rowSpan={user.oders.length}>
                                  {user.address}
                                </td>
                                <td rowSpan={user.oders.length}>
                                  {user.email}
                                </td>
                                <td rowSpan={user.oders.length}>ads</td>
                              </>
                            )}
                            <td>{order.name}</td>
                            <td>{order.count}</td>
                            <td>{order.price}</td>
                            {orderIndex === 0 && (
                              <>
                                <td rowSpan={user.oders.length}>72000</td>
                                <td rowSpan={user.oders.length}>
                                  <button>Xóa</button>
                                </td>
                              </>
                            )}
                          </tr>
                        </React.Fragment>
                      ))}
                    </>
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

export default AdminCart;
