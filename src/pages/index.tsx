import AboutApp from "@/components/LandingPage/Components/AboutApp";
import TemplateView from "@/components/LandingPage/Components/TemplateView";
import WorkFlow from "@/components/LandingPage/Components/WorkFlow";
import ForgotPassword from "@/components/LandingPage/Models/ForgotPassword";
import Login from "@/components/LandingPage/Models/Login";
import Signup from "@/components/LandingPage/Models/Signup";
import Footer from "@/components/LandingPage/includes/Footer";
import Header from "@/components/LandingPage/includes/Header";
import axios from "axios";
import React from "react";

type Props = {
  name: string[];
};

function LandingPage({ name }: Props) {
  console.log(name);

  return (
    <>
      <Header />
      <TemplateView />
      <WorkFlow />
      <AboutApp />
      <Footer />

      {/* Models */}
      <Login />
      <Signup />
      <ForgotPassword />
    </>
  );
}

export default LandingPage;
export async function getServerSideProps() {
  const response = await axios.get(`http://localhost:3000/api/hi`, {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  });

  return {
    props: {
      name: response.data.name,
    },
  };
}
