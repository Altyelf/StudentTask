import React from "react";
import Form from "../components/organism/form/form";
import { Heading } from "../components/organism/heading/heading";
import "./home.scss";

const Home = () => {
  return (
    <section className="main">
      <Heading />
      <Form />
    </section>
  );
};

export default Home;
