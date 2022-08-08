import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { EventHandler, Fragment, MouseEventHandler, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
type ApiResponseData = {
  gross: string
  id: string
  image: string
  rank: string
  title: string
  weekend: string
  weeks: string
}
const Home: NextPage = () => {
  const [officeBoxItems, setOfficeBoxItems] = useState<ApiResponseData[]>([]);
  const [isSearch,setIsSearch] = useState(false);
  const clickSearchBar = (e : React.MouseEvent<HTMLDivElement>) =>{
    e.preventDefault();
    setIsSearch(current => !current)
  }
  useEffect(()=>{
    const url = `https://imdb-api.com/en/API/BoxOffice/${process.env.MOVIE_API_KEY}`;
    const response = async() =>{
      const response = await fetch(url).then(response => response);
      if(!response.ok){
        throw new Error("ErrorMessage");
      }
      const responseData = await response.json().then(data => data);
      setOfficeBoxItems(responseData.items);
      console.log(responseData.items)
    }
    response();
  },[]);
  return (
    <Fragment>
    <div>
     {officeBoxItems.map(item =>(
      <li key={item.id}>{item.title}</li>
    ))}  
    </div>
    <div className={styles.main}>
    <div onClick={clickSearchBar}>searchBar</div>
    {isSearch ? <div className={`${styles.searchBox} ${styles.show}`}>maybe</div> : <div className={`${styles.searchBox} ${styles.hide}`}>goods</div>}
  
    <div className={styles.main}>main</div>
    </div>

    </Fragment>
  )
}

export default Home
