import { callbackify } from "node:util";
import { useEffect, useState } from "react";
import styles from "../../../../styles/components/store-components/home/carousel.module.css"

export function Carousel(){
    const[carouselPosition,setCarouselPosition] = useState(0)
    const[carouselLeft,setCarouselLeft] = useState(0)
    const [balls,setBalls] = useState([<div/>,<span/>,<span/>])
    

    setTimeout(()=>{
        var tempBalls = balls;
        if(carouselPosition < 2){
            tempBalls[carouselPosition + 1] = <div/>;
            tempBalls[carouselPosition ] = <span/>;
            setCarouselPosition(carouselPosition + 1);
            
        }else{
            tempBalls[carouselPosition ] = <span/>;
            tempBalls[0] = <div/>;
            setCarouselPosition(0);
        }
        setBalls(tempBalls);
            
        
        
    },4500);

    
    return(
        <div>
            <div className = {styles.containerCarousel}>
            
                <div style={{width:"calc(100vw * 3)", left:`calc(-100vw * ${carouselPosition})`, transition:"1.5s"}}>
                    <div>
                        <img src="/img/carousel1.png" alt=""/>
                    </div>
                    <div>
                        <img src="/img/carousel2.png" alt=""/>
                    </div>
                    <div>
                        <img src="/img/carousel3.png" alt=""/>
                    </div>

                </div>
                

                <div>
                    {balls}
                </div>
            

            </div>
    

         
        </div>    
            
        
    )

}