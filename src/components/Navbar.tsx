import { useContext } from "react"
import styles from '../../styles/components/navbar.module.css';

import { MenuMobile } from "./navbar-components/MenuMobile"
import { NavItem } from "./navbar-components/NavItem"

interface typeProps {
    selected : string;
}

export function Navbar(props : typeProps){
    return(
        <nav className={`${styles.containerNavbar}`}>
            <div>
                <ul>
                    <NavItem 
                        isSelected = {props.selected === "home" ? true : false}
                        link="/"
                    >
                        Home
                    </NavItem>

                    <NavItem 
                        link="#"
                        isSelected = {props.selected === "loja" ? true : false}
                    >
                        Loja
                    </NavItem>
                    <NavItem 
                        link="/sobre"
                        isSelected = {props.selected === "sobre" ? true : false}
                    >
                        Sobre
                    </NavItem>
                </ul>
                <MenuMobile/>
                
                
            </div>
        </nav>
    )


}