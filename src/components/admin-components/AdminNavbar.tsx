import styles from "../../../styles/components/admin/adminNavbar.module.css";

export function AdminNavbar(){
    return(
        <nav className={styles.containerAdminNavbar}>
            <ul>
                <li>
                    <a href="#">GameStore Admin</a>
                </li>

                <li>
                    <span>
                        <img src="/icons/admin/notification-admin.svg" alt=""/>
                    </span>

                    <span>
                        <img src="/icons/admin/logout-admin.svg" alt=""/>
                    </span>

                </li>
            </ul>
        </nav>
    );
}