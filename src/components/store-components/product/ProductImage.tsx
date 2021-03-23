import styles from "../../../../styles/components/store-components/product/productImage.module.css";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ReactMediumZoom from 'react-medium-zoom';
import { useContext, useEffect, useState } from "react";
import { ThumbImage } from "./thumbImage";
import { ProductImageContext, ProductImageProvider } from "../../../contexts/product/ProductImageContext";


export function ProductImage(){
    var imgs = ["/img/product-ps4.png","https://images.tcdn.com.br/img/img_prod/794026/console_ps4_playstation_4_slim_1tb_standard_jet_black_cuh_2215b_7086_2_20200723111821.jpg"];


    const [spanThumb, setSpanThumb] = useState(null);
    const {imageCurrent} = useContext(ProductImageContext);
    
    useEffect(()=>{
        let tempSpanThumb = [];
        for (var i = 0; i<imgs.length;i++){
            tempSpanThumb.push(
                <ThumbImage src={imgs[i]} index = {i}/>
            );   
        }
        setSpanThumb(tempSpanThumb);
    },[]);
    


    return(
    
            <div className={styles.containerProductImage}>
                <div>
                    {spanThumb}

                </div>
                
                <div>
                    <div>
                    
                        <ReactMediumZoom src= {imgs[imageCurrent]}/>
                        
                    </div>

                </div>
            </div>
   
    );
}  