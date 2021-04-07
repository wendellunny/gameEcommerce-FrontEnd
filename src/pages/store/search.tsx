import { useEffect } from "react";
import { MenuMobileModalStore } from "../../components/store-components/home/MenuMobileModalStore";
import { NavbarStore } from "../../components/store-components/home/NavbarStore";
import { Filter } from "../../components/store-components/search/Filter";
import styles from "../../../styles/components/store-components/search/search.module.css";
import { SearchList } from "../../components/store-components/search/SearchList";
import { SearchContextProvider } from "../../contexts/search/SearchContext";
export default function search(){
    return (
        <SearchContextProvider>
            <div className={styles.containerSearch}>
                <NavbarStore/>
                <MenuMobileModalStore selected={null}/> 
                
                <div>
                    <Filter/>
                    <SearchList/>

                </div>
                
                

            </div> 
        </SearchContextProvider>
    );

}