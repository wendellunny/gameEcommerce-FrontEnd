import styles from "../../../../styles/components/store-components/home/navbarStore.module.css";
import { MenuMobile } from "../../navbar-components/MenuMobile";

export function NavbarStore(){
    return(
        <nav className = {styles.navbarStore}>
           <ul>
               <li>
                   <a href="/">Home</a>
               </li>
               <li>
                   <form action="#">
                       <input type="text" name="" id=""/>
                       <button>
                           <img src="/icons/search-icon.svg" alt=""/>
                        </button>
                   </form>
               </li>
               <li>
                   <div className="opt1">
                        <img src="/icons/user-icon.svg" alt=""/> 
                   </div>
                   <div className="opt2">
                        <img src="/icons/cart-icon.svg" alt=""/>
                   </div>
               </li>
           </ul>
           <MenuMobile/>
        </nav>
    );
}