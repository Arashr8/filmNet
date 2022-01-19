
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css'

//swiper
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Layout from '../components/layout';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "../store/auth";


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <Layout customize={pageProps.customize}>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
    </AuthProvider>
  );
}

export default MyApp;
