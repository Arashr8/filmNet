
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

//swiper
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Layout from '../components/layout';


function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
