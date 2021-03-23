import Head from "next/head";
import { ContentAbout } from "../components/about-components/ContentAbout";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { MenuMobileModal } from "../components/navbar-components/MenuMobileModal";

export default function Sobre() {

   
    return (
     
        <div className="container-about">
            <Head>
                <title>Sobre</title>
            </Head>
            <Navbar selected = "sobre"/>
            <MenuMobileModal selected = "sobre"/>
            <ContentAbout/>
            <Footer/>
            
        </div>
  
    )
  }