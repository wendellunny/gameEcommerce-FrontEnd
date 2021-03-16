import { useState } from "react";
import styles from "../../../../styles/components/store-components/home/productThumbnail.module.css";

export function ProductThumbnail(){
    const[imgSize,setImgSize] = useState(17.5);
    const imgMouseEnter = ()=>{
        setImgSize(19.3);
    }
    const imgMouseLeave = ()=>{
        setImgSize(17.5);
    }
    return(
        <div className = {styles.containerProductThumbnail}>
            <div>
                <div>
                    <span onMouseEnter={imgMouseEnter} onMouseLeave={imgMouseLeave}>
                        <a href="#">Ver Produto</a>
                    </span>
                    <img src="/img/ps4.png" alt="" style={{width:`${imgSize}rem`}}/>
                </div>
                
                <button>Adicionar ao Carrinho</button>
            </div>
            <div>
                <div>
                    <span>R$</span>
                    <p>1.299</p>
                    <span>,99</span>
                </div>
                <span>até 12x</span>
                
            </div>
            
        </div>
    )
}