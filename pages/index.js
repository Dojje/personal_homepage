import styles from '../styles/home.module.scss'
import { useEffect, useState } from "react";

import React from 'react'

class DaysAlive extends React.Component {

  render() {
    return(<div className={styles.survival}>
    <p>
      Daniel has survived {getDaysAlive()}&nbsp;days
    </p>
  </div>)
  }
}

export default function Home() {
  return (<>
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

    <div className={styles.under}>
      <DaysAlive/>
    </div>
    {section(
      "Things i've done", "here are things i have done",
      <><h3>your mom</h3> </>, styles.stuffdone
      )}

    <footer className={styles.footer}>

    </footer>
  </>)
}

function section(header, subheader, content, classname) {
  return (<>
    <div className={classname}>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
      {content}
    </div>
  </>)
}

function getDaysAlive() {
  var ms_alive = (Date.now() - Date.parse("29 Jan 2007 GMT +0100"));
  var days_alive = ms_alive / 1000 / 60 / 60 / 24;

  return Math.floor(days_alive);
}


const myLoader = ({ src }) => {
  return `${src}`
}

