import styles from '../styles/home.module.scss'
import { useEffect } from 'react'
import Cookie from 'js-cookie'

const Header = ({lang, setLang}) => {
  let getLang = () => {
    if (lang === "sv") {
      return "english"
    } else if (lang === "en") {
      return "swedish"
    } else {
      return "nothing"
    }
  }
  
  let switchLang = () => {
    if (lang === "sv") {
      setLang("en")
    } else if (lang === "en") {
      setLang("sv")
    }
  }

  useEffect(() => {
      console.log("heer");
      Cookie.set("lang", lang, {expires: 356, sameSite: "strict"});
  }, [lang])

  return (
    <div className={styles.header} >
      <a href="/">
        <h2>{lang == "en" ? "dojjes personal homepage" : "dojjes hemsida"}</h2>
      </a>
        <button 
            style={{
                fontSize: "24px",
                marginLeft: "auto",
            }}
            onClick={switchLang}
            >
            {getLang()}
        </button>
        { /*
        TODO Fix links for header
        <a href="/blog">
        blog
        </a>
        <a href="/contact">
          contact
        </a>
        */}
    </div>
  )
}

export default Header;
