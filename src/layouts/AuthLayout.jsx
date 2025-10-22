import React from "react";
import Container from "../Container/Container";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const AuthLayout = () => {
  return (
    <div>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Outlet></Outlet>
      <div className="bg-neutral">
        <Container>
          <Footer></Footer>
        </Container>
      </div>
    </div>
  );
};

export default AuthLayout;
