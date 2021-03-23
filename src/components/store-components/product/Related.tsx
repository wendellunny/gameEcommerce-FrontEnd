import { ProductThumbnail } from "../home/ProductThumbnail";
import styles from "../../../../styles/components/store-components/product/related.module.css";

export function Related(){
    return(
        <div className = {styles.containerRelated}>
            <h1>Relacionados</h1>
            <div>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
            </div>
        </div>
    );
}