import styles from '../styles/home.module.scss'
import { useEffect, useState } from "react";

import React from 'react';

class ThingDone extends React.Component {
  render() {
    return(<div className={styles.thingDone}>
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
      <div>
        <img src="https://i.ytimg.com/vi/S1cde5JUAuQ/maxresdefault.jpg" alt="" />
      </div>
    </div>)
  }
}

export default function Home() {
  return (<>
    <div className={styles.body}>
      <div className={styles.hero}>
        <div className={styles.middlepart}>
          <div className={styles.pfp}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.imgur.com/gbJnQDb.png"
              width="400"
              height="400"
              alt="cool cat pfp"
            />

          </div>

          <div className={styles.bio}>
            <p>hey guys</p>
          </div>
        </div>
      </div>

      <div className={styles.stuffDone}>
        <h1>Things i have done</h1>
        <ThingDone title="Yung Lean Jacket" description="Yung lean jacket btw it only works on computer (rip)">

        </ThingDone>
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
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

