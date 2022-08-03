import styles from '../styles/home.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

function LinkButton({lang, href, text}) {
  const router = useRouter()
  return (
    <a href={href}>
      <button style={{
        fontSize: "24px",
        marginLeft: "auto",
        padding: "10px 15px",
        backgroundColor: router.asPath === href ? "var(--accent-unselected)" : "var(--accent)",
      }}>
        {text}
      </button>
    </a>
  )
}

const Header = ({lang, setLang}) => {
  let getLang = () => {
    if (lang === "sv") {
      return "in english"
    } else if (lang === "en") {
      return "in swedish"
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
    <div style={{
      width: "100%",
      backgroundColor: "var(--background)",
      padding: "20px 60px",

      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
    }} >
      <div>
        {/*<LinkButton text={lang === "en" ? "blog" : "blogg"} href="/blog" />*/}
      </div>
      <a href="/" style={{
        color: "var(--white)",
        fontSize: "36px",
      }}>
        {lang == "en" ? "dojjes personal homepage" : "dojjes hemsida"}
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
    </div>
  )
}

export default Header;
