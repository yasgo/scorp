import React from "react";
import { FormattedMessage } from "react-intl";
import { Navbar } from "react-bootstrap";

const Footer = props => {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5">
      <Navbar.Text>
        <FormattedMessage id='footer.title' defaultMessage="Copyright" />
      </Navbar.Text>
    </Navbar>
  )
}

export default Footer;