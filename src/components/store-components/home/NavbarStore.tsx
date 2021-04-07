import { useContext, useEffect } from "react";
import styles from "../../../../styles/components/store-components/home/navbarStore.module.css";
import { SearchContext } from "../../../contexts/search/SearchContext";
import { MenuMobile } from "../../navbar-components/MenuMobile";

export function NavbarStore(){
    const {searchQuery} = useContext(SearchContext);
    useEffect(()=>{
        if(searchQuery){
            document.getElementById("searchInput").value = searchQuery;
        }
        
    },[searchQuery]);

    
    return(
        <nav className = {styles.navbarStore}>
           <ul>
               <li>
                   <a href="/">Home</a>
               </li>
               <li>
                   <form action="/store/search" method="get">
                       <input type="text" name="q" id="searchInput"/>
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