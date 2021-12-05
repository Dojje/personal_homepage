import styles from '../styles/yunglean/yunglean.module.scss';
import React, {useState, useEffect} from 'react';

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

function YungLean() {
  const [jacketState, setjacketState] = useState("off");
  useEffect(() => {
    if (jacketState == "install") {
      setTimeout(function(){ setjacketState("on"); }, 1935);
    }
    else if (jacketState == "remove") {
      setTimeout(function(){ setjacketState("off"); }, 2402);
    }

  }, [jacketState]);

  const switchJacketState = () => {
    if (jacketState == "on") {
      setjacketState("remove");
    }
    else if (jacketState == "off") {
      setjacketState("install");
    }
  }

  return(<>
    <body className={styles.body}></body>
    <div className={styles.content}>
      <div className={styles.yungleanVideo}>
        <YungeLeanVideo jacketState={jacketState} />
      </div>
      <button className={styles.controls} onClick={switchJacketState}>Put on Jacket</button>
    </div>
  </>)
}

export default YungLean
