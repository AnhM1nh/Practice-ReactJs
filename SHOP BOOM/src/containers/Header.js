import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

function Header() {
  return (
    <>
      <header id="header">
        <div className="header-top flex">
          <div className="container flex">
            <div className="header-top-left">
              <span>
                <i class="fas fa-envelope-square"></i> boom@gmail.com
              </span>
              <span>
                <i class="fas fa-phone-alt"></i> 0337 493 650
              </span>
            </div>
            <div className="header-top-right">
              <ul className="header-top-btns flex">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/" className="header-top-btn nav-link" to="/Login">
                    Đăng nhập
                  </a>
                </li>
                <li>
                  <a href="/" className="header-top-btn">
                    <i class="fas fa-store"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* top navbar */}
        {/* <nav className="top-navbar flex">
          <div className="collapse navbar-collapse container flex" id="navbarMenu">
            <ul className="navbar-nav-left flex">
              <li>
                <Link className="nav-link active" to="/women">
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
            {/* logo */}
            {/* <a href="/" className="navbar-brand flex">
              <span className="brand-text">B.O.O.M</span>
            </a>
            {/* end of logo */}
            {/* <ul className="navbar-nav-right flex">
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
            </ul> */}
            {/* hamburger menu icon */}
          {/* <button type="button" className="navbar-toggler">
            <i className="fa fa-bars" />
          </button> */}
            {/* end of hamburger menu icon */}
          {/* </div>
        </nav> */}
        <Navbar bg="light" expand="lg">
          <Container className="collapse navbar-collapse container flex ">
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link className="nav-link active" to="/women">Women</Nav.Link>
                <Nav.Link className="nav-link" to="/men" > Men</Nav.Link>
                <Nav.Link className="nav-link" to="/children" > Children</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="brand-text">B.O.O.M</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-link" to="/gioithieu" >Giới Thiệu</Nav.Link>
                <Nav.Link className="nav-link" to="/baohanh" >Chính Sách Bảo Hành</Nav.Link>
                <Nav.Link className="nav-link" to="/lienhe" > Liên Hệ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      
    </>
  )
}

export default Header;