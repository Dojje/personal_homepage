import Page from '../helpers/page'
import { useEffect, useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState(undefined)

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

  return (
    <Page>
      <button onClick={() => {setLang("sv"); localStorage.setItem("lang", "sv")}}>{lang}</button>
    </Page>
  )
}
