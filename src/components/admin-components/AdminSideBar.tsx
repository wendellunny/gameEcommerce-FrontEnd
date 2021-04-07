import styles from "../../../styles/components/admin/adminSideBar.module.css";


export function AdminSideBar(){
    return(
        <div className={styles.containerAdminSideBar}>
            <ul>
                <li>
                    <a href="">
                        <div></div>
                        <span>DashBoard</span>
                    </a>   
                </li>
                <li>
                    <a href="">
                        <div></div>
                        <span>Usuários</span>
                    </a>
                    
                </li>
                <li>
                    <a href="">
                        <div></div>
                        <span>Produtos</span>   
                    </a>
                </li>
            </ul>
        </div>
    );
    
}