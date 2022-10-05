import Page from '../modules/page'
import ThingDone from '../modules/thing_done';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState(undefined)

  return (
    <Page setLang={setLang} lang={lang}>
      <div>
        <h2>
          {(lang === "sv") ? "halloj, jag heter Daniel" : "hello"}
        </h2>
        <div style={{
          marginTop: "60px"
        }}>
          <h3>
            {(lang === "sv") ? "saker jag har gjort" : "things i have done"}
          </h3>
          <div style={{
            padding: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            padding: "20px",
            gap: "20px",
            marginTop: "10px"
          }}>
            <ThingDone img="scoob.png" alt="picture of scooby doo" text="hejsan, det här är en cool grej"/>
            <ThingDone img="scoob.png" alt="picture of scooby doo" text="hejsan, det här är en cool grej"/>
            <ThingDone img="scoob.png" alt="picture of scooby doo" text="hejsan, det här är en cool grej"/>
            <ThingDone img="scoob.png" alt="picture of scooby doo" text="hejsan, det här är en cool grej"/>
          </div>
        </div>
      </div>
    </Page>
  )
}
