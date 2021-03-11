import { useEffect, useState } from "react";
import { setConstantValue } from "typescript";
import styles from "../../../styles/components/about-components/contentAbout.module.css";

export function ContentAbout(){
    const [isShowImg,setIsShowImg] = useState(false);
    const [leftSpan,setLeftSpan] = useState ("-100vh");
    const [opacitySpan,setOpacitySpan] = useState ("0%");
    useEffect(()=>{
        setIsShowImg(true);
        setLeftSpan("0");
        setOpacitySpan("100%")
    },[]);

 

    return (
        <div className={styles.containerContentAbout}>
            <span style = {{marginLeft: leftSpan, opacity: opacitySpan,transition : "1s" }}>
                <img src="/img/assasins-creed.svg"/>
            </span>
            
            <div>
                <h1>Quem Somos</h1>
                <p>Ativa desde 2008, somos uma empresa muito reconhecida no mercado no nixo de venda de video games. Trabalhamos com consoles e jogos.</p>
                <p>Nós prezamos pela sua satisfação e a qualidade do produto, dando garantia de 1 ano para qualquer video game comprado em nossa loja.</p>
                <p>Compras de qualquer console, o frete é grátis</p>

            </div>
        </div>
    );
}