import styles from "../../../../styles/components/store-components/home/infoBar.module.css";



export function InfoBar(){
    return(
        <div className={styles.containerInfoBar}>
            <div>
                <img src="/icons/info-cart.svg" alt=""/>
                <p>
                    Compra de console<br/>
                    O frete é grátis
                </p>
            </div>
            <div>
                <img src="/icons/info-card.svg" alt=""/>
                <p>
                    Aceitamos<br/>
                    Cartão de crédito
                </p>
            </div>
            <div>
                <img src="/icons/info-protected.svg" alt=""/>
                <p>
                    Compra<br/>
                    100% segura
                </p>
            </div>
        </div>
    );
}