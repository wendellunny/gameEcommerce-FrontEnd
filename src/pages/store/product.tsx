import { Footer } from "../../components/Footer";
import { MenuMobile } from "../../components/navbar-components/MenuMobile";
import { MenuMobileModalStore } from "../../components/store-components/home/MenuMobileModalStore";
import { NavbarStore } from "../../components/store-components/home/NavbarStore";
import { Product } from "../../components/store-components/product/Product";


export default function product (){
    return(
        <div style={{overflow:"hidden"}}>
            <NavbarStore/>
            <MenuMobileModalStore selected={null}/>
            <Product/>
            <Footer/>
        </div>
        
        
    );
}