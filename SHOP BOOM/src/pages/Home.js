import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <div className="header-banner">
          <div className="container flex">
            <div className="header-banner-left flex">
              <h1>Hãy khám phá những mùa thời trang cùng nhau.</h1>
              <p className="text">
                Ở nước ta, thời tiết giữa hai miền Bắc Nam có sự khác biệt rõ
                rệt. Cũng chính vì vậy mà gu thời trang ở mỗi nơi đều có nét đặc
                trưng riêng. Nếu như ở miền Bắc có 4 mùa xuân, hạ, thu, đông thì
                ở miền Nam chỉ có hai mùa nắng và mưa. Tùy vào thời tiết, xu
                hướng thời trang sẽ thay đổi liên tục để đảm bảo cho sức khỏe.
                Vậy làm thế nào để có một gu thời trang ấn tượng theo từng mùa?
                Hãy cùng tham khảo một số sản phẩm bên B.O.O.M nha .
              </p>
              <a href="/#" className="btn btn-lg">
                shop now
              </a>
            </div>
            <div className="header-banner-right">
              <img src="assets/images/header-banner-1.jpg" alt />
            </div>
          </div>
        </div>
        {/* end of header banner */}
        {/* header bottom navbar */}
        {/* end of header bottom navbar */}
        {/* end of header */}
        {/* popular section */}
        <section id="popular">
          <div className="container">
            <div className="section-title">
              <h2>Best Sellers</h2>
            </div>
            <div className="popular-grid grid">
              <div className="popular-item">
                <div className="item-img">
                  <img src="assets/images/f1.jpg" />
                  <button type="button" className="view-icon">
                    <i className="fa fa-eye" />
                  </button>
                </div>
                <div className="item-info">
                  <span className="name">Sơ Mi Tay Ngắn f1</span>
                  <span className="price">99.000đ</span>
                </div>
              </div>
              <div className="popular-item">
                <div className="item-img">
                  <img src="assets/images/f2.jpg" />
                  <button type="button" className="view-icon">
                    <i className="fa fa-eye" />
                  </button>
                </div>
                <div className="item-info">
                  <span className="name">Sơ Mi Tay Ngắn f2</span>
                  <span className="price">99.000đ</span>
                </div>
              </div>
              <div className="popular-item">
                <div className="item-img">
                  <img src="assets/images/f3.jpg" />
                  <button type="button" className="view-icon">
                    <i className="fa fa-eye" />
                  </button>
                </div>
                <div className="item-info">
                  <span className="name">Sơ Mi Tay Ngắn f3</span>
                  <span className="price">99.000đ</span>
                </div>
              </div>
              <div className="popular-item">
                <div className="item-img">
                  <img src="assets/images/f4.jpg" />
                  <button type="button" className="view-icon">
                    <i className="fa fa-eye" />
                  </button>
                </div>
                <div className="item-info">
                  <span className="name">Sơ Mi Tay Ngắn f4</span>
                  <span className="price">99.000đ</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="container">
          <div className="about-us-left" />
          <div className="about-us-right">
            <a href="/#" className="navbar-brand">
              Story of B.O.O.M
            </a>
            <p className="text">
              B.O.O.M được thành lập năm 2017 – là nơi truyền ý tưởng về thời
              trang thiết kế lấy cảm hứng `dựa trên bức tranh chân dung một
              người phụ nữ xinh đẹp, kiêu kì và bí ẩn. Luôn theo đuổi sự lãng
              mạn và tinh tế như chính tên thương hiệu vốn có, những sản phẩm
              của chúng tôi phần lớn xoay quanh hai gam màu đen &amp; trắng kinh
              điển.
            </p>
          </div>
        </section>
        {/* end of about us section */}
        {/* footer */}
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
        {/* end of footer */}
      </div>
    </>
  );
}

export default Home;
