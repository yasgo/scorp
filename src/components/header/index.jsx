import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginModal from "../login-modal";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userAction, langAction } from "../../redux/actions";

const Header = props => {
  let history = useHistory();
  let [loginModalShow, setLoginModalShow] = useState(false);
  let [page, setPage] = useState(history.location.pathname);

  const userData = useSelector(state => state.user);
  const lang = useSelector(state => state.lang);

  history.listen(location => {
    setPage(location.pathname);
  })

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <header className="mb-5">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src={require("../../assets/svg/logo.svg")}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand>
          {
            page === "/" ? (
              <FormattedMessage id='header.title' defaultMessage="Dummy" />
            ) : (
                capitalizeFirstLetter(page.replace("/", ""))
              )
          }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-4">
            <Nav.Link as={Link} to="/">
              <FormattedMessage id='header.nav.home' defaultMessage="Home" />
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <FormattedMessage id='header.nav.contact' defaultMessage="Contact" />
            </Nav.Link>
            <NavDropdown title={String(lang).toUpperCase()}>
              <NavDropdown.Item onClick={() => langAction.langChange("tr")}>TR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => langAction.langChange("en")}>EN</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {
            userData.name ? (
              <NavDropdown title={userData.name}>
                <NavDropdown.Item>{userData.email}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => userAction.userDelete()}>
                  <FormattedMessage id='header.nav.logout' defaultMessage="Logout" />
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
                <Button onClick={() => setLoginModalShow(true)}>
                  <FormattedMessage id='header.nav.login' defaultMessage="Login" />
                </Button>
              )
          }
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={loginModalShow} onClose={() => setLoginModalShow(false)} />
    </header>
  )
}

export default Header;