import type { NextPage } from "next";
import React, {
  Fragment
} from "react";
import styles from "../styles/Home.module.css";
import Movies from "../components/movies/movies";
const Home: NextPage = () => {
  return (
    <Fragment>
      <div>
        <div className={styles.mainitems}>
          <Movies />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
