import styles from '../../styles/yunglean/yunglean.module.scss';
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link'

class JacketOff extends React.Component {

  render() {
    return(
      <div className={styles.yungleanVideo}>
        <video autoPlay muted loop>
          <source className={styles.yunglean} src="yunglean/mp4/jacket-off.mp4" type="video/mp4"/>
          <source className={styles.yunglean} src="yunglean/webm/jacket-off.webm" type="video/webm"/>
        </video>
      </div>
      )
  }
}

class JacketOn extends React.Component {

  render() {
    return(
      <div className={styles.yungleanVideo}>
        <video autoPlay muted loop>
          <source className={styles.yunglean} src="yunglean/mp4/jacket-on.mp4" type="video/mp4"/>
          <source className={styles.yunglean} src="yunglean/webm/jacket-on.webm" type="video/webm"/>
        </video>
      </div>
      )
  }
}

class JacketRemove extends React.Component {

  render() {
    return(
      <div className={styles.yungleanVideo}>
        <video autoPlay muted loop>
          <source className={styles.yunglean} src="yunglean/mp4/jacket-remove.mp4" type="video/mp4"/>
          <source className={styles.yunglean} src="yunglean/webm/jacket-remove.webm" type="video/webm"/>
        </video>
      </div>
      )
  }
}

class JacketInstall extends React.Component {

  render() {
    return(
      <div className={styles.yungleanVideo}>
        <video autoPlay muted loop>
          <source className={styles.yunglean} src="yunglean/mp4/jacket-install.mp4" type="video/mp4"/>
          <source className={styles.yunglean} src="yunglean/webm/jacket-install.webm" type="video/webm"/>
        </video>
      </div>
      )
  }
}

class YungeLeanVideo extends React.Component {

  render() {
    if (this.props.jacketState == "off") {
      return <JacketOff/>;
    }
    else if (this.props.jacketState == "on") {
      return <JacketOn/>;
    }
    else if (this.props.jacketState == "remove") {
      return <JacketRemove/>;
    }
    else if (this.props.jacketState == "install") {
      return <JacketInstall/>;
    }

  }
}

class YungLeanButton extends React.Component {
  render() {

    const switchJacketState = () => {
      if (this.props.jacketState == "on") {
        this.props.setJacketState("remove");
      }
      else if (this.props.jacketState == "off") {
        this.props.setJacketState("install");
      }
    }

    if (this.props.jacketState == "off") {
      return <button className={styles.yungLeanButtonBright} onClick={switchJacketState}>{JACKET_ON_TEXT}</button>;
    }
    else if (this.props.jacketState == "on") {
      return <button className={styles.yungLeanButtonBright} onClick={switchJacketState}>{JACKET_OFF_TEXT}</button>;
    }
    else if (this.props.jacketState == "remove") {
      return <button className={styles.yungLeanButtonDark} onClick={switchJacketState}>{JACKET_ON_TEXT}</button>;
    }
    else if (this.props.jacketState == "install") {
      return <button className={styles.yungLeanButtonDark} onClick={switchJacketState}>{JACKET_OFF_TEXT}</button>;
    }

  }
}

class Header extends React.Component {


  render() {

    return(<>
      <div className={styles.header}>
        <h1>
          <Link href="/">
            <a>
              Dojje
            </a>
          </Link>

        </h1>
      </div>
    </>)

  }
}

const JACKET_ON_TEXT = "Put on Jacket";
const JACKET_OFF_TEXT = "Remove Jacket";


function YungLean() {
  const [jacketState, setJacketState] = useState("off");

  useEffect(() => {
    if (jacketState == "install") {
      setTimeout(function(){
        setJacketState("on");
      }, 1935);
    }
    else if (jacketState == "remove") {
      setTimeout(function(){
        setJacketState("off");
      }, 2402);
    }

  }, [jacketState]);

  return(<>
    <Head>
      <title>Yung Leans jacket</title>
    </Head>

      <div className={styles.cache_purposes}>
        this is here so that it can load images from cache
        <JacketOff />
        <JacketOn />
        <JacketRemove />
        <JacketInstall />
      </div>

      <div className={styles.container}>
        <Header />
        <div className={styles.content}>

          <div className={styles.yungleanVideo}>
            <YungeLeanVideo jacketState={jacketState} />
          </div>
          <YungLeanButton jacketState={jacketState} setJacketState={setJacketState}/>

        </div>

      </div>
  </>)
}

export default YungLean
