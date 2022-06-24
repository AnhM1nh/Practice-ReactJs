import React from 'react';
class Header extends React.Component {
    render() {
      return (
        <>
            <header id="header">
  <div className="header-top flex">
    <div className="container flex">
      <div className="header-top-left">
        <span>boom@gmail.com</span>
        <span>0337 493 650</span>
      </div>
      <div className="header-top-right">
        <ul className="header-top-btns flex">
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
          <li><a href="/#" className="header-top-btn">Đăng nhập</a></li>
          <li><a href="/#" className="header-top-btn">Đăng ký</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>

        </>
        
      );
    }
  }
export default Header