import Image from "next/image";
import styles from "./header.module.css";

 export const Header = () => 
    <header className={styles.header}>
      <div className={styles.titleContainer}> 
        <h1 className={styles.title}>ДОМ НА&nbsp;КОЛЁСАХ</h1>
        <h2 className={styles.subtitle}>ПОСТРОЕНО В АНАПЕ</h2>
      </div>
    </header>