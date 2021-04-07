import { AdminNavbar } from "../../components/admin-components/AdminNavbar";
import { AdminSideBar } from "../../components/admin-components/AdminSideBar";
import styles from "../../../styles/components/admin/index.module.css";


export default function Home(){
    return(
        <div className={styles.containerIndex}>
            <AdminNavbar/>
            <div>
                <AdminSideBar/>
            </div>  
        </div>
    );

    

}