import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";
import Logo from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const CustomNavbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navbar-section fixed-wrapper">
      <Navbar
        expand="lg" 
        className="custom-navbar"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container className="nav-container">
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src={Logo} // Replace with your logo path
              alt="AMLBot Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          <div className="navigation d-flex justify-content-end justify-content-lg-between align-items-center">
            {/* Language Selector */}
            <Nav className="language-dropdown-left">
              <NavDropdown title="RU" id="language-dropdown">
                <NavDropdown.Item href="#en">EN</NavDropdown.Item>
                <NavDropdown.Item href="#ru">RU</NavDropdown.Item>
                <NavDropdown.Item href="#fr">FR</NavDropdown.Item>
                <NavDropdown.Item href="#de">DE</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Toggle button for mobile view */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
              className="custom-toggler"
            >
              {expanded ? <CloseIcon /> : <MenuIcon />}
            </Navbar.Toggle>

            {/* Navigation Links */}
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Продукты" id="products-dropdown">
                  <NavDropdown.Item href="#product1">Product 1</NavDropdown.Item>
                  <NavDropdown.Item href="#product2">Product 2</NavDropdown.Item>
                  <NavDropdown.Item href="#product3">Product 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">Стоимость</Nav.Link>
                <Nav.Link href="#analysis">Анализ</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Nav.Link href="#blog">Блог</Nav.Link>
                <Nav.Link href="#about">О нас</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            {/* Language Selector */}
            <Nav className="language-dropdown-right">
              <NavDropdown title="RU" id="language-dropdown">
                <NavDropdown.Item href="#en">EN</NavDropdown.Item>
                <NavDropdown.Item href="#ru">RU</NavDropdown.Item>
                <NavDropdown.Item href="#fr">FR</NavDropdown.Item>
                <NavDropdown.Item href="#de">DE</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
