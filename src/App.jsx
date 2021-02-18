import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IntlProvider } from "react-intl";

import English from "./lang/en.json";
import Turkish from "./lang/tr.json";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const language = useSelector(state => state.lang);

  return (
    <Router>
      <IntlProvider locale={language} messages={language === 'en' ? English : Turkish}>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Container>
      </IntlProvider>
    </Router >
  )
}

export default App;
