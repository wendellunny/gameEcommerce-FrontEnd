import { useState } from "react";
import styles from "../../../../styles/components/store-components/home/bannersCategories.module.css";


export function BannersCategories(){
    const [imgSize1,setImgSize1] = useState(38.5);
    const [imgSize2,setImgSize2] = useState(38.5);
    const [saturate1,setSaturate1] = useState(1);
    const [saturate2,setSaturate2] = useState(1);
    const enterButton = (button : number)=>{
        if(button == 1){
            setImgSize1(40.7);
            setSaturate1(0.2);   
        }else if(button == 2){
            setImgSize2(40.7);  
            setSaturate2(0.2) ;
        }
        
    }
    const leaveButton = (button : number)=>{
        if(button == 1){
            setImgSize1(38.5);
            setSaturate1(1)   
        }else if(button == 2){
            setImgSize2(38.5); 
            setSaturate2(1);  
        } 
    }

    return(
        <div className={styles.containerBannersCategories}>
            <div>
                <div>
                    <img src="/img/banner1.jpg" alt="" style={{width: `${imgSize1}rem`,filter:`saturate(${saturate1})`}}/>
                </div>
                
                <button onMouseEnter={()=>enterButton(1)} onMouseLeave = {()=>leaveButton(1)}>Consoles</button>
            </div>
            <div>
                <div>
                 <img src="/img/banner2.jpeg" alt="" style={{width: `${imgSize2}rem`, filter:`saturate(${saturate2})`}}/>
                </div>
                
                <button onMouseEnter={()=>enterButton(2)} onMouseLeave = {()=>leaveButton(2)}>Games</button>
            </div>
        </div>
    );
}