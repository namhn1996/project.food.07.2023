import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Admin.css";
import axios from "axios";
function AdminProducts() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:8888/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    limit: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    axios
      .post("http://localhost:8888/products", newProduct)
      .then((res) => {
        console.log(res.data);
        // Cập nhật danh sách sản phẩm
        setProducts([...products, res.data]);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8888/products/${id}`)
      .then((res) => {
        console.log(res.data);
        // Cập nhật danh sách sản phẩm sau khi xóa
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((err) => console.log(err));
  };
const handleEdit = (id) => {
  
}
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
            <div className="service">
              <h1>Quản Lý Thực Đơn</h1>

              <div className="form-add">
                <form id="main-form" onSubmit={handleSubmit}>
                  <label htmlFor="imgsp">Ảnh mô tả</label>
                  <input
                    type="text"
                    className="inputform"
                    placeholder="https://..."
                    id="imgsp"
                    name="image"
                    onChange={handleChange}
                  />
                  <label htmlFor="servicename">Tên món ăn</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập tên món ăn"
                    className="servicename inputform"
                    id="servicename"
                    onChange={handleChange}
                  />
                  <label htmlFor="price">Giá</label>
                  <input
                    type="number"
                    placeholder="Nhập giá món ăn"
                    className="price inputform"
                    id="price"
                    name="price"
                    onChange={handleChange}
                  />
                  <label htmlFor="limit">Kho hàng</label>
                  <input
                    type="number"
                    name="limit"
                    className="price inputform"
                    placeholder="Nhập số lượng tồn kho"
                    id="limit"
                    onChange={handleChange}
                  />
                  <button type="submit" className="taobtn">
                    Tạo món ăn
                  </button>
                </form>
              </div>

              <table className="deletetable" id="delete-table">
                <tbody>
                  <tr>
                    <th>Mã món ăn</th>
                    <th>Tên món ăn</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Giá</th>
                    <th>Kho hàng</th>
                    <th>Chỉnh sửa</th>
                  </tr>
                </tbody>
                <tbody id="tbody">
                  {products.map((product) => (
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>
                        <div className="imgItem">
                          <img
                            className="imgsp"
                            src={product.image[0]}
                            alt=""
                          />
                          <img
                            className="imgsp"
                            src={product.image[1]}
                            alt=""
                          />
                        </div>
                      </td>
                      <td>{product.price}</td>
                      <td>{product.limit}</td>
                      <td>
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="editbtn"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="editbtn"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="edit-service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
