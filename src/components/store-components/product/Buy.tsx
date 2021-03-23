import styles from "../../../../styles/components/store-components/product/buy.module.css";


export function Buy(){
    return(
        <div className={styles.containerBuy}>
            <div>
                <h1>Play Station 4, Slim, 500GB, Standart, jet Black </h1>
                <div>
                    <span>R$</span>
                    <p>1.299</p>
                    <span>,99</span>
                </div>
            </div>
                
            <div>
                <p>Valor do Frete</p>
                <form action="">
                    <input type="text"/>
                    <button type="submit">Calcular</button>
                </form>
                <span>Informe seu CEP</span>


            </div>

            <button>Comprar</button>
            
        </div>
    )
}