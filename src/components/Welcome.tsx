import { useEffect, useState } from "react";
import styles from "../../styles/components/welcome.module.css";

export function Welcome(){
    const [opacityBack,setOpacityBack] = useState(0);
    const [isLoad,setIsLoad] = useState(false);
   
    useEffect(()=>{
        setIsLoad(true);

    },[]);

    useEffect(()=>{
        if(isLoad){
            showDiv();
        }
    },[isLoad]);
    const showDiv = () => {
        setOpacityBack(1)
    }

    return(
        <div >
            <div className={`${styles.containerWelcome} `}  style={{opacity:opacityBack, transition:"1s"}} >
                <h1>Bem Vindo</h1>
                <p>Consoles com Menores Preços</p>
            </div>
        </div>
    );
}