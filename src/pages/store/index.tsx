import { Footer } from "../../components/Footer";
import {Carousel} from "../../components/store-components/home/Carousel";
import {MenuMobileModalStore} from "../../components/store-components/home/MenuMobileModalStore";
import styles from "../../../styles/components/store-components/home/containerStore.module.css";

import { NavbarStore } from "../../components/store-components/home/NavbarStore";
import { InfoBar } from "../../components/store-components/home/infoBar";
import { BannersCategories } from "../../components/store-components/home/BannersCategories";
import { Vitrine } from "../../components/store-components/home/Vitrine";
import Head from "next/head";


export default function index (){
    return (
        <div className = {styles.container}>
            <Head>
                <title>Loja - Game Ecommerce</title>
            </Head>
            <NavbarStore/>
            <MenuMobileModalStore selected={null}/>
            <Carousel/>
            <InfoBar/>
            <BannersCategories/>
            <Vitrine/>
            <Footer/>
        </div>
    );
}