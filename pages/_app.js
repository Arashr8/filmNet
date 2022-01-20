import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
// Global Styles
import "../styles/global.css";
// Loader Styles
import "../styles/loader.scss";

// Swiper Styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";
import { AuthContext, AuthProvider } from "../store/auth";
import { useContext, useEffect, useState } from "react";
import Loader from "../util/loader";
import Router from "next/router"

function MyApp({ Component, pageProps }) {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  Router.events.on('routeChangeStart', () => {
    console.log("onRouteChangeStart");
    setLoaderStatus(true)
    setIsFirst(false)
  });
  
  Router.events.on('routeChangeComplete', () => {
    console.log("onRouteChangeComplete");
    setTimeout(() => {
      setLoaderStatus(false)
      setIsFirst(false)
    }, 1000)
  });
  
  Router.onRouteChangeError = () => {
   
  };

  return (
    <AuthProvider>
      {loaderStatus ? (
        <Loader />
      ) : (
        <Layout customize={pageProps.customize}>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      )}
    </AuthProvider>
  );
}

export default MyApp;
