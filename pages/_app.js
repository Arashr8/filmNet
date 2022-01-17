
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


function MyApp({ Component, pageProps }) {
  return ( 
    <Layout customize={pageProps.customize}>
    <ToastContainer />
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
