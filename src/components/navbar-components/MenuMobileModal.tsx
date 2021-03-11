import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/components/navbar-components/menuMobileModal.module.css";
import { NavMobileContext } from "../../contexts/navMobileContext";


interface menuMobileProps{
    selected: string;
}
export function MenuMobileModal (props : menuMobileProps){
    const {isToggleMenuMobile,toggleMenuMobile} = useContext(NavMobileContext);
    const [styleDisplay,setStyleDisplay] = useState('-12rem');
    const [styleOpacty,setStyleOpacity] = useState(0);

    const setDisplayMenuMobileModal =  () =>{
        toggleMenuMobile();
    }
    useEffect(  () =>{
        if(isToggleMenuMobile){
            setStyleDisplay('0');
            setStyleOpacity(1);
        }else{
            setStyleDisplay('-12rem');
            setStyleOpacity(0);
        }
    },[isToggleMenuMobile]);

    return(
    <div className={styles.containerMenuMobileModal} style={{left:styleDisplay,opacity:styleOpacty, transition:" 0.5s"}}>
            <ul>
                <li 
                    style={props.selected === "home"? {background:"#1C1C1C"}:null}
                >
                    <a href="/">Home</a>
                </li>
                <li
                     style={props.selected === "loja"? {background:"#1C1C1C"}:null}
                >
                    <a href="#">Loja</a>
                </li>
                <li
                     style={props.selected === "sobre"? {background:"#1C1C1C"}:null}
                >
                    <a href="/sobre">Sobre</a>
                </li>
            </ul>
    </div>
    );
    
        
    
}