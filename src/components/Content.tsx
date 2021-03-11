import styles from "../../styles/components/content.module.css";
import { VideoGame } from "./VideoGame";
import { Welcome } from "./Welcome";
import Rellax from "rellax";
import { useEffect } from "react";



export function Content(){
    
    

    return(
        <div className={`${styles.contentContainer}`}  >
            <Welcome/>
            <VideoGame/>
            <div>
                <div className={`${styles.back2} `} ></div>
            </div>
            
         
            
        </div>
    );
}