import Head from 'next/head'
import { useEffect } from 'react';

export default function Page({children, setLang, lang}) {
  useEffect(() => {
    // if the state is defined, it means it has changed. change the value
    if (typeof(lang) === "string") {
      localStorage.setItem("lang", lang)
      return
    }

    let slang = localStorage.getItem("lang");
    if (slang == undefined) {
      // if slang is undefined, set lang to en
      localStorage.setItem("lang", "en")
      setLang("en")
    } else {
      // if slang is defined, set the state to the local storage
      setLang(slang)
    }

  }, [lang]);

  let nextLang = (lang === "sv") ? "en" : "sv";

  return (
    <>
      <Head>
      </Head>

      <main style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100wh",
        background: "var(--background-base)",
        color: "var(--text-light)"
      }}>
        <header style={{
          height: "60px",
          width: "100%",
          background: "var(--foreground)"
        }}>
          <button onClick={() => {setLang(nextLang);}}>{nextLang}</button>
        </header>
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{
            width: "60%",
            height: "auto",
            marginTop: "40px",
            borderRadius: "40px",
            padding: "5%",
            background: "var(--background)",
            minHeight: "100vh"
          }}>
            {children}
          </div>
        </div>
        <footer style={{
          marginTop: "auto",
        }}>
          <div style={{
            marginTop: "20px",
            background: "var(--background)",
          }}>
          </div>
        </footer>
      </main>
    </>
  )
}
