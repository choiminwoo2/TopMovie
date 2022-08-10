import type { NextPage } from "next";
import React, {
  Fragment
} from "react";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <Fragment>
      <div>
        <div className={styles.mainitems}>main</div>
      </div>
    </Fragment>
  );
};

export default Home;
