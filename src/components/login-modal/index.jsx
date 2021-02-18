import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Modal, Button, Form } from "react-bootstrap";
import { userAction } from "../../redux/actions";

const LoginModal = props => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const formData = getFormData(event.target.elements);
    const userData = getUserData(formData);

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      userAction.userUpdate(userData);
      props.onClose();
    }

    setValidated(true);
  };

  const getUserData = data => {
    let result = {};

    data.forEach(item => {
      result[item.name] = item.value;
    })

    return result;
  }

  const getFormData = elements => {
    let result = [];

    for (let index = 0; index < elements.length; index++) {
      if (!["button", "submit"].includes(elements[index].type)) {
        result.push({
          name: elements[index].name,
          value: elements[index].value
        })
      }
    }

    return result;
  }

  return (
    <Modal show={props.show} onHide={() => props.onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>
          <FormattedMessage id='login.title' defaultMessage="Login" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <FormattedMessage id='login.form.name' defaultMessage="Name" />
            </Form.Label>
            <FormattedMessage id='login.form.name' defaultMessage="Name">
              {(msg) => (
                <Form.Control type="text" name="name" placeholder={msg} required />
              )}
            </FormattedMessage>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <FormattedMessage id='login.form.email' defaultMessage="Email" />
            </Form.Label>
            <FormattedMessage id='login.form.email' defaultMessage="Email">
              {(msg) => (
                <Form.Control type="email" name="email" placeholder={msg} required />
              )}
            </FormattedMessage>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <FormattedMessage id='login.form.password' defaultMessage="Password" />
            </Form.Label>
            <FormattedMessage id='login.form.password' defaultMessage="Password">
              {(msg) => (
                <Form.Control type="password" name="password" placeholder={msg} required />
              )}
            </FormattedMessage>
          </Form.Group>
          <Button variant="primary" type="submit">
            <FormattedMessage id='login.form.login' defaultMessage="Login" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal;