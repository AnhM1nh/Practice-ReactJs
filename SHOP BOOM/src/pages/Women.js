import React from "react";
import { Link } from "react-router-dom";
function Women() {
  return (
    <>
      <div>
        {/* --------------------------------------Heder----------------------- */}
        <section id="collection-2">
          <div className="container">
            <div className="section-title">
              <h2>Những Bộ Sưu Tập Mới</h2>
            </div>
            <div className="collection-2-grid grid">
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women1.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM1</span>
                  <span className="price">200.000Đ</span>
                </div>
              </div>
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women2.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM2</span>
                  <span className="price">250.000Đ</span>
                </div>
              </div>
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women3.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM3</span>
                  <span className="price">280.000Đ</span>
                </div>
              </div>
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women4.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM4</span>
                  <span className="price">210.000Đ</span>
                </div>
              </div>
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women5.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM5</span>
                  <span className="price">240.000Đ</span>
                </div>
              </div>
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women6.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM6</span>
                  <span className="price">200.000Đ</span>
                </div>
              </div>
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women7.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM7</span>
                  <span className="price">99.99Đ</span>
                </div>
              </div>
              <div className="collection-2-item">
                <div className="item-img">
                  <img src="assets/images/women8.JPG" />
                </div>
                <div className="item-info">
                  <span className="name">WM8</span>
                  <span className="price">199.99Đ</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div className="container grid">
            <div className="footer-item one">
              <a href="/#" className="navbar-brand">
                <span className="brand-text">B.O.O.M</span>
              </a>
              <p className="text">
                51/8 đường số 5 phường Bình Trưng Tây quận 2 TP. Thủ Đức
              </p>
            </div>
            <div className="footer-item">
              <h4>Menu</h4>
              <ul className="footer-links">
                <li>
                  <Link className="nav-link" to="/women">
                    Women
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/men">
                    Men
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/children">
                    Children
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>Shopping</h4>
              <ul className="footer-links">
                <li>
                  <Link className="nav-link" to="/gioithieu">
                    Giới Thiệu
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/baohanh">
                    Chính Sách Bảo Hành
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/lienhe">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item four">
              <h4>Contact Us</h4>
              <span>boom@gmail.com</span>
              <ul className="footer-social-links flex">
                <li>
                  <a href="/#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Women;
