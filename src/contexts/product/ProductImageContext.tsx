import { createContext, useState } from "react";
interface ProductImageContextProps {
    imageCurrent : number;
    setImageCurrent : (index)=> void;
}
export const ProductImageContext = createContext({} as ProductImageContextProps) 

export function ProductImageProvider ({children}){
    const [imageCurrent,setImageCurrent] = useState(0);
    
    return (
        <ProductImageContext.Provider value={{
            imageCurrent,
            setImageCurrent
        }}>
            {children}
        </ProductImageContext.Provider>
    )
}