import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginnPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = await axios
      .get("http://localhost:8888/users")
      .then((res) => res.data)
      .catch((err) => console.log("err", err));
    const checkUser = users.find(
      (user) => user.email === user.email && user.password === user.password
    );
    if (checkUser.email == user.email && checkUser.password == user.password) {
      alert("Đăng nhập thành công !!");
      await axios.get(`http://localhost:8888/users/${checkUser.id}`);
      localStorage.setItem("userLogin", JSON.stringify(checkUser));
      localStorage.setItem("userStatus", JSON.stringify(true));
      Navigate("/home");
    } else {
      alert("Đăng nhập không thành công !!");
    }
  };
  return (
    <form onSubmit={handleSubmit} action="#" className="sign-in-form">
      <h2 className="title">Đăng Nhập</h2>

      <div className="input-field">
        <i className="fas fa-envelope" />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          type="password"
          placeholder="Mật khẩu"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <a href="#" className="href">
        Quên mật khẩu{" "}
      </a>
      <button type="submit" value="login" className="btn solid">
        Đăng Nhập
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

export default LoginnPage;
