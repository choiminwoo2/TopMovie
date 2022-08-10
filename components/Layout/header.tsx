import styles from "./header.module.css";
import Link from "next/link";
import Search from "../search/search";
import { useState } from "react";
export interface searchProps{
    isSearch : boolean,
    onClickHanlder : (onClick : boolean) => void
}
const Header = () => {
    const [isSearch, setIsSearch] = useState<searchProps['isSearch']>(false);
    const searchClickHandler = (onClick : boolean) =>{
        setIsSearch(onClick);
    }
  return (
    <header className={styles.header}>
      <div className={styles['header-top']}>
        <div className={styles.logo}>
          <h2>TopMovies</h2>
        </div>
        <div className={styles["link-wrap"]}>
          <div className={styles["link-item"]}>
            <Link href={"/officeBox"}>officeBox</Link>
          </div>
          <div className={styles["link-item"]}>Top25</div>
          <div className={styles["link-item"]}>Top250</div>
        </div>
        <Search isSearch = {isSearch} onClickHanlder={searchClickHandler}/>
        <div className={styles.menu}>menu</div>
      </div>
    </header>
  );
};

export default Header;
