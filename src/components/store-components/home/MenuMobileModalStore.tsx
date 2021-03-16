import { useContext, useEffect, useState } from "react";
import styles from "../../../../styles/components/navbar-components/menuMobileModal.module.css";
import { NavMobileContext } from "../../../contexts/navMobileContext";


interface menuMobileProps{
    selected: string;
}
export function MenuMobileModalStore (props : menuMobileProps){
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
                    style={props.selected === "Pesquisar"? {background:"#1C1C1C"}:null}
                >
                    <a >Pesquisar</a>
                </li>
                <li
                     style={props.selected === "Perfil"? {background:"#1C1C1C"}:null}
                >
                    <a>Perfil</a>
                </li>
                <li
                     style={props.selected === "Carrinho"? {background:"#1C1C1C"}:null}
                >
                    <a >Carrinho</a>
                </li>
                <li
                     style={props.selected === "Home"? {background:"#1C1C1C"}:null}
                >
                    <a href="/">Voltar para Home</a>
                </li>
            </ul>
    </div>
    );
    
        
    
}