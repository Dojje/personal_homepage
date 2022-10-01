import Page from '../helpers/page'
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState(undefined)

  return (
    <Page setLang={setLang} lang={lang}>
      <div style={{
        fontSize: "50px",
        fontWeight: "500",
      }}>
        {(lang === "sv") ? "hejsan" : "hello"}
      </div>
    </Page>
  )
}
