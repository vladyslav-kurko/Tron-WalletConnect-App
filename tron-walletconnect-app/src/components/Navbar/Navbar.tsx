import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";
import Logo from '../../assets/logo.png';
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

const CustomNavbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { i18n } = useTranslation();

  const navigate = useNavigate();
  const { lng } = useParams<{ lng: string }>();

  const handleLanguageChange = (language: string) => {
    if (lng !== language) {
      // Change the language in i18next
      i18n.changeLanguage(language);
      // Update the URL with the new language
      navigate(`/${language}`);
    }
  };
  
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

          <div className="navigation d-flex justify-content-end align-items-center">
            {/* Language Selector */}
            {/* <Nav className="language-dropdown-left">
              <NavDropdown title="RU" id="language-dropdown">
                <NavDropdown.Item href="#en">EN</NavDropdown.Item>
                <NavDropdown.Item href="#ru">RU</NavDropdown.Item>
              </NavDropdown>
            </Nav> */}

            {/* Toggle button for mobile view */}
            {/* <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
              className="custom-toggler"
            >
              {expanded ? <CloseIcon /> : <MenuIcon />}
            </Navbar.Toggle> */}

            {/* Navigation Links */}
            {/* <Navbar.Collapse id="navbar-nav">
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
            </Navbar.Collapse> */}

            {/* Language Selector */}
            {/* <Nav className="language-dropdown-right">
              <NavDropdown title={i18n.language.toUpperCase()} id="language-dropdown">
                <NavDropdown.Item onClick={() => handleLanguageChange("en")} >EN</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLanguageChange("ru")}>RU</NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
