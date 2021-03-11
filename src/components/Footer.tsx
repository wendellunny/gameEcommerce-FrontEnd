import styles from "../../styles/components/Footer.module.css";

export function Footer(){
    return (
    <footer className={`${styles.footerContainer} `} >
        <div>
            <p>Digite seu Email para receber novos Produtos</p>
            <div>
                <input type="email"/>
                <button>OK</button>
            </div>
            
        </div>
    </footer>
    );
}