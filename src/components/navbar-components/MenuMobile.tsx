import { useContext, useEffect, useState } from "react";
import { transform } from "typescript";
import styles from "../../../styles/components/navbar-components/menuMobile.module.css";
import { NavMobileContext } from "../../contexts/navMobileContext";


export function MenuMobile(){
    const {toggleMenuMobile,isToggleMenuMobile} = useContext(NavMobileContext);
    const [rotateImage,setRotateImage] = useState("0deg");
    useEffect(()=>{
        if(isToggleMenuMobile){
            setRotateImage("90deg");
        }else{
            setRotateImage("0deg");
        }
        ;
    },[isToggleMenuMobile])
    return(
        <div className={styles.menuMobileContainer}>
            <span onClick={toggleMenuMobile}> 
                <img src="/icons/menu-mobile.svg" style={{transform : `rotate(${rotateImage})` , transition :"0.5s"}}/> 
            </span>
        </div>
    )

}