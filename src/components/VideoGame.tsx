import { useEffect, useState } from "react";
import styles from "../../styles/components/videoGame.module.css";




export function VideoGame (){
    const [classAnima,setClassAnima] = useState("smooth-scrool"); 

    useEffect(()=>{
        window.onscroll = (event)=>{
            const videoGame = document.getElementById("smooth-scrool").offsetTop - 460;
            // console.log("event = "+ window.scrollY + " document "+ videoGame);
            if(window.scrollY > videoGame  && classAnima=="smooth-scrool"){
                setClassAnima(null);    
            }
        }
    },[])
    return(
        <div className = {`${styles.containerVideoGame} ` }>
            <div id="smooth-scrool" className={classAnima}>
                <h1  >Compre Já seu PlayStation</h1>
                <p>Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation®.</p>
            </div>
            <span className={` ${classAnima}`} id="smooth-scrool2"> 
                <img src="/img/ps5.png" alt="" />
            </span>
        </div>
    );
}