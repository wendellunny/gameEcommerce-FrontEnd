import '../../styles/global.css'
import { NavMobileContextProvider } from '../contexts/navMobileContext';


function MyApp({ Component, pageProps }) {
  return (
    <NavMobileContextProvider>
      <Component {...pageProps} />
    </NavMobileContextProvider>
  );
}

  
  

export default MyApp;
