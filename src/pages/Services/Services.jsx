import React from "react";
import { useLoaderData } from "react-router";
import Container from "../../Container/Container";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const data = useLoaderData();
  return (
    <>
      <Container>
        <ServiceCard data={data}></ServiceCard>
      </Container>
    </>
  );
};

export default Services;
