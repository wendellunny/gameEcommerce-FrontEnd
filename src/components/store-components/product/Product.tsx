import { Buy } from "./Buy";
import { Description } from "./Description";
import { ProductImage } from "./ProductImage";
import { Related } from "./Related";
import styles from "../../../../styles/components/store-components/product/product.module.css";
import { ProductImageProvider } from "../../../contexts/product/ProductImageContext";

export function Product(){
    return (
        <ProductImageProvider>
            <div className={styles.containerProduct}>
               <div>
                    <ProductImage/>
                    <Buy/>
                </div> 
                <div>
                    <Description/> 
                     <Related/> 
      
                </div>
              
                     
            </div>
        </ProductImageProvider>
    );
}