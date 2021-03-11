import { useState } from 'react';
import styles from '../../../styles/components/navbar-components/navItem.module.css';
interface NavItem{
    children: string;
    link:string;
    isSelected: Boolean;
}

export function NavItem(props : NavItem){
    const [widthLine, setWidthLine] = useState(0);


    const selectItem = ()=>{
        setWidthLine(100);
    }
    const deselectItem = ()=>{
        setWidthLine(0);
    }



    return(
        <li className={styles.item} onMouseEnter = {selectItem} onMouseLeave={deselectItem}>
            <a href={props.link} > {props.children} </a>
            <div style={props.isSelected? {width:"100%"} : {width:`${widthLine}%` ,transition:'width 0.3s'}}/>
        </li>
    );
}