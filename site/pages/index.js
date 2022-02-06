import styles from '../styles/home.module.scss'
import { useEffect, useState } from "react";

import React from 'react';

  function ThingDone({href, title, description}) {
    return(<a href={href} className={styles.thingDone}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/520632980188954624/930515585966690314/unknown.png" alt="" />
      </div>
    </a>)
  }

function Introduction() {
  
}

export default function Home() {
  return (<>
    <div className={styles.body}>
      <div className={styles.stuffDone}>
        <h1>Things i have done</h1>
        <ThingDone href="/yunglean"title="Yung Lean Jacket" description="Yung lean jacket btw it only works on computer (rip)">

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

