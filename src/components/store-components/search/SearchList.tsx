import { ProductThumbnail } from "../home/ProductThumbnail";
import styles from "../../../../styles/components/store-components/search/searchList.module.css";

export function SearchList(){
    return(
        <div className={styles.containerSearchList}>
            <h1>Resultados para <b>Play Station 4</b></h1>
            <div>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
                <ProductThumbnail/>
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