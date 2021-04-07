import { createContext, useState } from "react";

interface SearchContextProps{
    searchQuery : string;
    setSearchQuery : (index) => void
}

export const SearchContext = createContext({} as SearchContextProps)


export function SearchContextProvider({children}){
    const [searchQuery,setSearchQuery] = useState(" ");
    return(
        <SearchContext.Provider value={{
            searchQuery,
            setSearchQuery
        }}>
            {children}
        </SearchContext.Provider>
    );
}