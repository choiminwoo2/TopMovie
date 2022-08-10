import { Fragment, useState } from "react";
import styles from "./search.module.css";
import type {searchProps} from '../Layout/header'
const Search = (props : searchProps) => {
  const clickSearchBar = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(e.currentTarget !== e.target){
        return;
    }
    props.onClickHanlder(!props.isSearch)
  };
  return (
    <Fragment>
      <div className={styles["search-bar"]} onClick={clickSearchBar}>
        search
      </div>
      {props.isSearch ? (
        <div className={`${styles.searchBox} ${styles.show}`}>maybe</div>
      ) : (
        <div className={`${styles.searchBox} ${styles.hide}`}>goods</div>
      )}
    </Fragment>
  );
};

export default Search;
