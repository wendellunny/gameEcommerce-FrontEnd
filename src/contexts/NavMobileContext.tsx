import {createContext, ReactNode, useState} from 'react';


interface NavMobileProps{
    children: ReactNode;
}
interface ContextNavMobileProps{
    isToggleMenuMobile : Boolean;
    toggleMenuMobile: ()=>void;
}
export const NavMobileContext = createContext({} as ContextNavMobileProps);

export function NavMobileContextProvider({children} : NavMobileProps){
    const [isToggleMenuMobile,setIsToggleMenuMobile]= useState(false);
    const toggleMenuMobile= ()=> {
        if(isToggleMenuMobile){
            setIsToggleMenuMobile(false);
        }else{
            setIsToggleMenuMobile(true);
        }
        
    }
    return(
        <NavMobileContext.Provider value={{
            isToggleMenuMobile,
            toggleMenuMobile
        }}>
            {children}
        </NavMobileContext.Provider>
    )
    
}

