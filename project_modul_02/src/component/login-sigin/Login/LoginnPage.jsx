import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//Người dùng nhập vào
function LoginnPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    axios
      .get("http://localhost:8888/users/")
      .then((response) => {
        const status = response.data;
        const isLocked = status.find((item) => item.status === false);

        if (isLocked) {
          toast.error("Tài khoản đã bị khóa");
        } else {
          axios
            .post("http://localhost:8888/login", {
              email: email,
              password: password,
            })
            .then((res) => {
              if (res.status === 200) {
                localStorage.setItem("userLogin", JSON.stringify(res.data));
                localStorage.setItem("userStatus", JSON.stringify(true));
                toast.success("Đăng nhập thành công");
                setTimeout(() => navigate("/home"), 2000);
              }
            })
            .catch((err) => {
              if (err.response && err.response.status === 404) {
                toast.error("Đăng nhập thất bại");
              } else {
                toast.error("Đã xảy ra lỗi");
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} action="#" className="sign-in-form">
      <h2 className="title">Đăng Nhập</h2>

      <div className="input-field">
        <i className="fas fa-envelope" />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <a href="#" className="href">
        Quên mật khẩu
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
      <ToastContainer />
    </form>
  );
}

export default LoginnPage;
