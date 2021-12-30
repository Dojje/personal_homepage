import styles from '../styles/home.module.scss'
import { useEffect, useState } from "react";

import React from 'react'

export default function Home() {
  return (<>
    <body className={styles.body}></body>
    <div className={styles.hero}>
      <div className={styles.middlepart}>
        <div className={styles.pfp}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="https://i.imgur.com/gbJnQDb.png"
            width="400"
            height="400"
            alt="cool cat pfp"
          />
            
        </div>

        <div className={styles.bio}>
          <p>
            Hey guys
          </p>
        </div>
      </div>
    </div>


    <div className={styles.stuffDone}>
      <h1>Things i have done</h1>
      <div className={styles.stuffDoneGrid}>
        <div>
          <a href="./yunglean/">yung lean</a>
        </div>
      </div>
    </div>

    <footer className={styles.footer}>

    </footer>
  </>)
}

function getDaysAlive() {
  var ms_alive = (Date.now() - Date.parse("29 Jan 2007 GMT +0100"));
  var days_alive = ms_alive / 1000 / 60 / 60 / 24;

  return Math.floor(days_alive);
}

function getAge() {
  var ms_alive = (Date.now() - Date.parse("29 Jan 2007 11:27GMT +0100"));
  var age = ms_alive / 1000 / 60 / 60 / 24 / 365
  
  return age
}

const myLoader = ({ src }) => {
  return `${src}`
}

