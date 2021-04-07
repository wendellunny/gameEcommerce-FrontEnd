import { useContext, useEffect } from "react";
import styles from "../../../../styles/components/store-components/search/filter.module.css";
import { SearchContext } from "../../../contexts/search/SearchContext";

export function Filter(){
    // const {setSearchQuery} = useContext(SearchContext);
  

    useEffect(()=>{
        var query = location.search.slice(1);
        var parts = query.split('&');
        var data = {};
        var radios = [];
        

        parts.forEach((parte) => {
            var keyValue = parte.split('=');
            var key = keyValue[0];
            var value = keyValue[1];
            if(key == "q"){
                document.getElementById("q").value = value;
            }else{
                let validate = document.getElementById(`radio${value}`);  
                if (validate){
                    document.getElementById(`radio${value}`).checked = true; 
                } 
                
            }
            
        });

        
        
        
    },[])

    const submitFilter = ()=>{
       
        document.getElementById("enviar").click();  
    }
    
    return(
        <form method="get">
            <div className={styles.containerFilter}>
                <input type="hidden"  name="q" id="q"/>
                <h1>Filtros</h1>
                <div>
                    <h1>Categoria</h1>
                    <div>
                        <span>
                            
                            
                            <input type="radio" name="category" id="radioconsoles" value="consoles"  onChange={submitFilter} />
                            <label htmlFor="radioconsoles"></label>
                            
                            
                            <span>Consoles</span>
                        </span>
                        <span>

                            
                            <input type="radio" name="category" id="radiojogos" value="jogos" onChange={submitFilter}/>
                            <label htmlFor="radiojogos"></label>
                            <span>Jogos</span>
                        </span>
                    </div>
                </div>
                <div>
                    <h1>Preço</h1>
                    <div>
                        <span>
                            <input type="radio" name="price" id="radio0-100" value="0-100" onChange={submitFilter}/>
                            <label htmlFor="radio0-100"></label>
                            <span>0-100</span>
                        </span>
                        <span>
                            <input type="radio" name="price" id="radio100-500" value="100-500" onChange={submitFilter}/>
                            <label htmlFor="radio100-500"></label>
                            <span>100-500</span>
                        </span>
                        <span>
                            <input type="radio" name="price" id="radio500-1000" value="500-1000" onChange={submitFilter}/>
                            <label htmlFor="radio500-1000"></label>
                            <span>500-1000</span>
                        </span>
                        <span>
                            <input type="radio" name="price" id="radio1000m" value="1000m" onChange={submitFilter}/>
                            <label htmlFor="radio1000m"></label>
                            <span>1000+</span>
                        </span>
                    </div>

                </div>
                <button id="enviar" >enviar</button>
            </div>
        </form>
        
    );
}