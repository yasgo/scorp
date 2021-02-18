import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Button, Form, Col, Row } from "react-bootstrap";

const Contact = (props) => {

  const userData = useSelector(state => state.user);

  let [name, setName] = useState(userData.name);
  let [email, setEmail] = useState(userData.email);

  let [validated, setValidated] = useState(false);

  useEffect(() => {
    setName(userData.name);
    setEmail(userData.email);
  }, [userData])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const formData = getFormData(event.target.elements);

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      console.log(formData);
    }

    setValidated(true);
  };

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

  const countryList = [
    { id: "TR", name: "Turkey" },
    { id: "US", name: "United States of America" },
    { id: "GB", name: "United Kingdom" },
    { id: "DE", name: "Germany" },
    { id: "SE", name: "Sweden" },
    { id: "KE", name: "Kenya" },
    { id: "BR", name: "Brazil" },
    { id: "ZW", name: "Zimbabwe" }
  ]

  return (
    <section>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="mb-4">
              <FormattedMessage id='contact.title' defaultMessage="Contact" />
            </h2>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <FormattedMessage id='contact.form.name' defaultMessage="Name" />
                  </Form.Label>
                  <FormattedMessage id='contact.form.name' defaultMessage="Name">
                    {(msg) => (
                      <Form.Control type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder={msg} required />
                    )}
                  </FormattedMessage>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <FormattedMessage id='contact.form.email' defaultMessage="Email" />
                  </Form.Label>
                  <FormattedMessage id='contact.form.email' defaultMessage="Email">
                    {(msg) => (
                      <Form.Control type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={msg} required />
                    )}
                  </FormattedMessage>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <FormattedMessage id='contact.form.country' defaultMessage="Country" />
                  </Form.Label>
                  <Form.Control as="select" custom name="country_code">
                    {
                      countryList.map((item, index) => (
                        <option value={item.id} key={index}>{item.name}</option>
                      ))
                    }
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <FormattedMessage id='contact.form.phone' defaultMessage="Phone Number" />
                  </Form.Label>
                  <FormattedMessage id='contact.form.phone' defaultMessage="Phone Number">
                    {(msg) => (
                      <Form.Control type="tel" name="phonenumber" placeholder={msg} required pattern="(05|5)[0-9][0-9][1-9]([0-9]){6}" />
                    )}
                  </FormattedMessage>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>
                <FormattedMessage id='contact.form.text' defaultMessage="Text" />
              </Form.Label>
              <FormattedMessage id='contact.form.text' defaultMessage="Text">
                {(msg) => (
                  <Form.Control as="textarea" name="text" rows={3} placeholder={msg} required />
                )}
              </FormattedMessage>
            </Form.Group>
            <Button variant="primary" type="submit">
              <FormattedMessage id='contact.form.send' defaultMessage="Send" />
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  )
}

export default Contact;