import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function SiginPage({ setIsSignIn }) {
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const validateForm = () => {
    let errors = {};

    // Kiểm tra từng trường input
    if (name.trim() === "") {
      errors.name = "Vui lòng nhập họ và tên";
    }

    if (email.trim() === "") {
      errors.email = "Vui lòng nhập email";
    } else if (!isEmailValid(email)) {
      errors.email = "Email không hợp lệ";
    }

    if (phone.trim() === "") {
      errors.phone = "Vui lòng nhập số điện thoại";
    }

    if (address.trim() === "") {
      errors.address = "Vui lòng nhập địa chỉ";
    }

    if (password.trim() === "") {
      errors.password = "Vui lòng nhập mật khẩu";
    } else if (password.length < 6) {
      errors.password = "Mật khẩu phải trên 6 kí tự";
    }
    if (confirmPassword.trim() === "") {
      errors.confirmPassword = "Vui lòng nhập lại mật khẩu";
    }
    if (isChecked === false) {
      errors.checkbox = "Vui lòng chấp thuận điều khoản";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp";
    }

    setErrors(errors);

    // Kiểm tra form có hợp lệ hay không
    return Object.keys(errors).length === 0;
  };
  const isEmailValid = (email) => {
    // Kiểm tra email có đúng định dạng hay không
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  const [user, setUser] = useState({
    userId: uuidv4(),
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    cart: [],
    status: true,
    oders: [],
  });
  const { name, email, phone, address, password, confirmPassword } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra input có hợp lệ hay không
    const formIsValid = validateForm();
    // Nếu form hợp lệ, xử lý logic khi submit form
    if (formIsValid) {
      alert("Đăng ký thành công !!");
      setIsSignIn(false);
      await axios
        .post("http://localhost:8888/users", user)
        .then((res) => console.log("res.data = " + res.data))
        .catch((err) => console.log("err", err));
    }
  };

  return (
    <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Đăng kí</h2>
      <div className="input-field">
        <i className="fas fa-user" />
        <input
          type="text"
          placeholder="Họ và tên"
          name="name"
          value={name}
          onChange={handleChange}
        />
        {errors.name && (
          <Alert className="alert" key="danger" variant="danger">
            {errors.name}
          </Alert>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && (
          <Alert className="alert" key="danger" variant="danger">
            {errors.email}
          </Alert>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-phone" />
        <input
          type="number"
          name="phone"
          placeholder="Số điện thoại"
          value={phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <Alert className="alert" key="danger" variant="danger">
            {errors.phone}
          </Alert>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-map" />
        <input
          type="text"
          placeholder="Địa chỉ"
          name="address"
          value={address}
          onChange={handleChange}
        />
        {errors.address && (
          <Alert className="alert" key="danger" variant="danger">
            {errors.address}
          </Alert>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={handleChange}
        />
        {errors.password && (
          <Alert className="alert" key="danger" variant="danger">
            {errors.password}
          </Alert>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <Alert className="alert" key="danger" variant="danger">
            {errors.confirmPassword}
          </Alert>
        )}
      </div>
      <div>
        {" "}
        {errors.checkbox && (
          <Alert variant="danger" className="checkbox">
            {errors.checkbox}
          </Alert>
        )}
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onChange={handleCheckboxChange}
        />{" "}
        Tôi đồng ý với điều khoản{" "}
        <a href="#" className="href">
          {" "}
          <span className="rules-text"> "Thỏa thuận người mua" </span>
        </a>
      </div>
      <button type="submit" className="btn" value="register">
        Đăng ký
      </button>
      <p className="social-text">Bạn có thể đăng nhập thông qua mạng xã hội</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google" />
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </form>
  );
}

export default SiginPage;
