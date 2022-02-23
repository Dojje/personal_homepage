import styles from '../styles/home.module.scss'
import { useEffect, useState } from "react";

import React from 'react';

function ThingDone({href, title, description}) {
  return(<a href={href} className={styles.thingDone}>
    <div className={styles.thingDoneDesc}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div>
      <img src="https://cdn.discordapp.com/attachments/520632980188954624/930515585966690314/unknown.png" alt="" />
    </div>
  </a>)
}

function Header() {
  // TODO add contact info

  return (
    <div className={styles.header}>
      <p>THIS WEBSITE IS WORK IN PROGRESS</p>
    </div>
  )
}

function Introduction() {
  // TODO add contact info

  const [age, setAge] = useState(getAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(age => age + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.introduction}>
      <h1>Hello, I am Daniel</h1>
      <p>I am {age} seconds old</p>
    </div>
  )
}

export default function Home() {
  return (
  <div className={styles.background}>
    <Header/>
    <div className={styles.content}>
      {Introduction()}

      <div className={styles.stuffDoneContainer}>
        <h2>Things i have done</h2>
        <div className={styles.stuffDone}>
          <ThingDone href="/yunglean"title="Yung Lean Jacket" description="make yung lean put on and take off his jacket"/>
        </div>
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  </div>
  )
}

function getDaysAlive() {
  var ms_alive = (Date.now() - Date.parse("29 Jan 2007 GMT +0100"));
  var days_alive = ms_alive / 1000 / 60 / 60 / 24;

  return Math.floor(days_alive);
}

function getAge() {
  var ms_alive = (Date.now() - Date.parse("29 Jan 2007 11:27 GMT +0100"));
  var age = Math.round(ms_alive / 1000) // / 60 / 60 / 24 / 365

  return age
}


