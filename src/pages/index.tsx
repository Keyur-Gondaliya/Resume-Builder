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
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
type Props = {
  name: string[];
};

function LandingPage({ name }: Props) {
  // console.log(name);
  const queryClient = new QueryClient();

  return (
    <>
      <ToastContainer
        position="top-right"
        toastClassName="dark-toast"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Header />
        <TemplateView />
        <WorkFlow />
        <AboutApp />
        <Footer />

        {/* Models */}
        <Login />
        <Signup />
        <ForgotPassword />
      </QueryClientProvider>
    </>
  );
}

export default LandingPage;

// export async function getServerSideProps() {
//   const response = await axios.get(`http://localhost:3000/api/hi`, {
//     headers: {
//       // Authorization: `Bearer ${localStorage.getItem('token')}`
//     },
//   });

//   return {
//     props: {
//       name: response.data.name,
//     },
//   };
// }
