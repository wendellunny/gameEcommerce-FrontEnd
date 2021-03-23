import Head from 'next/head'
import { Navbar } from '../components/Navbar'


import { MenuMobileModal } from '../components/navbar-components/MenuMobileModal';
import { Content } from '../components/content';
import { useEffect, useState } from 'react';
import { ScrollContext } from '../contexts/scrollContext';
import { Footer } from '../components/Footer';
// import "../../styles/global.css";



export default function Home() {
  
  const [evento,setEvento] = useState(1)
 
  return (
   
      <div className="container">
        <Head>
          <title>Game Ecommerce</title>
        </Head>
        <Navbar selected = "home"/>
        <MenuMobileModal selected ="home"/>
        <Content/>
        <Footer/>
        
      </div>

  )
}
