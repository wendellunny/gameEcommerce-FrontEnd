import { ProductThumbnail } from "./ProductThumbnail";
import styles from "../../../../styles/components/store-components/home/vitrine.module.css";

export function Vitrine(){
    return(
        <div className={styles.containerVitrine}>
            <h1>Vitrine</h1>
            <div>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                
                 
            </div>
        </div>
    )
}