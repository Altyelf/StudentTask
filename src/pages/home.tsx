import React from "react";
import Form from "../components/form/form";
import { Heading } from "../components/heading/heading";
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
