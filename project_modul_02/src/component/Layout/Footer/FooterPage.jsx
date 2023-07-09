import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
function FooterPage() {
  return (
    <div>
      <footer>
        <div className="footer-top border-bottom pb-3">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="left">
                  <Link to="/home" className="logo mb-3">
                    NaTra Food
                  </Link>
                  <p className="my-4">
                    Based in Hanoi, Vietnam <br />
                    Hotline : 034 66 888 96
                    <br />
                    <a href="https://www.facebook.com/natrafoods9698">
                      Fanpage : https://www.facebook.com/natrafoods9698
                    </a>
                    <br />
                    <a href="Shopee : https://shope.ee/VWTvwoaY5">
                      Shopee : https://shope.ee/VWTvwoaY5
                    </a>
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right mt-5 mt-lg-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.4142705096297!2d105.78113649300005!3d21.016103770911773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1svi!2s!4v1688612338348!5m2!1svi!2s"
                    width={600}
                    height={300}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center py-3">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom__copyright">
                <h2>
                  Copyright © <span className="year" />
                  <span className="name">Phuong Nam</span> all rights reserved
                </h2>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;
