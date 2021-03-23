import { useContext, useState } from "react"
import { ProductImageContext } from "../../../contexts/product/ProductImageContext"

interface PropsThumbImage{
    src : string;
    index : number
}


export function ThumbImage(props : PropsThumbImage){
    const {setImageCurrent,imageCurrent} = useContext(ProductImageContext);
    return(
        <span>
            <img src={props.src} onClick = {()=>setImageCurrent(props.index)}/>
        </span>    
    )
}