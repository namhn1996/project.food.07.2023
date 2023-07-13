import React, { useState } from "react";
import "../style.css";
import SiginPage from "../Sigin/SiginPage";
import register from "./img/register.svg";
import login from "./img/login.svg";
import LoginnPage from "./LoginnPage";

function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignIn = () => {
    setIsSignIn(true);
  };
  const handleLogIn = () => {
    setIsSignIn(false);
  };
  return (
    <div>
      <div className={`contai ${isSignIn ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <LoginnPage />
            <SiginPage setIsSignIn={setIsSignIn} />
          </div>
        </div>
        <div className="panels-container">
          <div
            className="panel left-panel"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="content">
              <h3>Bạn chưa có tài khoản ?</h3>
              <p>
                Sau khi đăng ký, bạn có thể sử dụng các dịch vụ của cửa hàng
                chúng tôi.
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignIn}
              >
                Đăng ký
              </button>
            </div>
            <img src={register} className="image" alt="Register" />
          </div>
          <div
            className="panel right-panel"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="content">
              <h3>Bạn đã có tài khoản ?</h3>
              <p>Hãy đăng nhập ngay để sử dụng các dịch vụ của cửa hàng.</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleLogIn}
              >
                Đăng nhập
              </button>
            </div>
            <img src={login} className="image" alt="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
