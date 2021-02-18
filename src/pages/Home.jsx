import React from "react";
import { FormattedMessage } from "react-intl";

const Home = (props) => {
  return (
    <section>
      <h2>
        <FormattedMessage id='home.title' defaultMessage="What is Lorem Ipsum?" />
      </h2>
      <p>
        <FormattedMessage id='home.p' defaultMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </p>
    </section>
  )
}

export default Home;