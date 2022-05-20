import React from "react";
import Page from "../components/page";

export default class TunnelbaneRace extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <h1>Tunnelbanerace</h1>
            <p>Tunnelbaneracet går ut på att ta sig till stockholms alla tunnelbanestationer på så kort tid som möjligt.</p>

            <h3>Inspiration</h3>
            <p>En vacker dag ploppade <a style={{color: "#0ff", textDecoration: "underline"}} href="https://www.youtube.com/watch?v=6jxmgdgeDCY">den här</a> videon upp i mitt youtubeflöde</p>
            <p>
                Det är en video där en kille och hans vänner tar sig till alla tunnelbanestationer i stockholm på kortast tid.
                När jag såg den tänkte jag att jag skulle kunna försöka med samma grej, det passar ju bra att göra den i sommar för att då får jag och mina vänner gröna gratiskort av sl.
            </p>

            <h3>Vägen</h3>
            <p>Saken som är viktigast är vilken väg man tar.</p>
            <h4>Plan 1</h4>
            <p>
                Plan 1 var att på riktigt att göra ett program för att försöka varje möjlig kombination av stationer.
                Men det tog inte lång tid tills jag märkte att det skulle ta alldeles för lång tid.
                Antalet kombinationer är 100 faktorialt vilket blir 9.332622e+157, alltså ett tal med 158 sifforo.
                Jag räknade lite på hur lång tid det skulle ta att köra det programmet och det skulle ta 3.032041e+150 år.
                Det talet är så stort så att det finns ett e i det.
            </p>
            <p>
                Jag skrotade iallafall Plan 1.
            </p>
            <h4>Plan 2</h4>
            <p>
                Plan 2 gick ut på att dela upp dela upp allting i mindre delar.
                Först tog jag ut vad jag kallar "nyckelstationerna". Det är stationerna som inte har två grannstationer.
                Alltså slutstationer och grenstationer.
                <br/>
                Då blir man kvar med dessa stationer
            </p>
            <ol>
                <li>mörby centrum</li>
                <li>östermalmstorg</li>
                <li>ropsten</li>
                <li>tc</li>
                <li>kungsträdgården</li>
                <li>slussen</li>
                <li>gullmarsplan</li>
                <li>skärmarbrink</li>
                <li>skarpnäck</li>
                <li>farsta strand</li>
                <li>hagsätra</li>
                <li>liljeholmen</li>
                <li>fruängen</li>
                <li>norsborg</li>
                <li>fridhemsplan</li>
                <li>hässelby strand</li>
                <li>västra skogen</li>
                <li>hjulsta</li>
                <li>akalla</li>
                <li>rådhuset</li>
                <li>odenplan</li>
            </ol>
            <p>
                anledningen till att rådhuset och odenplan finns med är att det finns två vägar mellan tc och fridhemsplan.
                Mitt datorprogram kan inte se skillnad mellan blå linje och grön linje så det här är det bästa sättet att skilja dem.
            </p>

            <p>
                Planen gick ut på att hitta bästa vägen mellan dem. Detta är ett matematiskt problem som kallas&nbsp;
                <a style={{color: "#0ff", textDecoration: "underline"}} href="https://en.wikipedia.org/wiki/Route_inspection_problem">route inspection problem</a>
                &nbsp;eller&nbsp;
                <a style={{color: "#0ff", textDecoration: "underline"}} href="https://en.wikipedia.org/wiki/Route_inspection_problem">chineese postman problem</a>
                .

                Grejen är att det problemet går ut på att varje väg har en sträcka som är likadan hela tiden.
                Detta stämmer inte inom tågtrafiken för att då tar det olika lång tid att ta sig från a till b beroende på när man börjar åka. Tågtrafiken har sina tider då tågen avgår.
            </p>
            <h4>Plan 3</h4>
            <p>
                Plan 3 bygger på plan 2, fast så att det funkar. Det är ett datorprogram som går igenom alla nyckelstationer på ett rimligt sätt.
            </p>
            <p>
                Först börjar man på hässelby strand eller norsborg. Sen simulerar man att man åker till alla grannstationer genom SL:s reseplanerare. Detta gör man i rondor.
                Vi tar norsborg som ett exempel
                <br />
            </p>
            <ul>
                <li>Man börjar på norsborg</li>
                <li>Man simulerar att man åker till liljeholmen</li>
                <li>Liljeholmen har tre grannstationer. Norsborg, fruängen och slussen. Så man simulerar att man åker till alla de tre. Då har man 3 olika vägar totalt.</li>
                <li>Sen fortsätter man genom att simulera att åka till de tre vägarna och ta alla deras grannar.</li>
                <li>Detta gör man tills en väg har tagit alla nyckelstationer</li>
            </ul>

            Denna simulation går att köra under en natt

            <h5>Problem</h5>
            <p>
                Det finns problem med detta, en väg skulle kunna göra en loop, alltså att vägen tar en fram och tillbaka mellan två stationer.
                <br />
                Detta löser man genom att eliminera vad som jag kallar "följare". En följarväg är en väg som har tagit samma nyckelstationer som en annan väg, fast den andra vägen har också tagit fler nyckelstationer.
            </p>
            <p>
                Alltså om väg A har tagit mörby och östermalmstorg medans väg B har tagit mörby, östermalmstorg och ropsten
                så är väg A följare av väg B.
                Detta gör så att man kan ta bort väg A.
            </p>
            <p>
                Ett annat problem är att man måste ta hänsyn till hur lång tid det tar att byta tåg.
                I mitt första försök provade jag att lägga till en väntetid när man är vid en nyckelstation.
                Fast det som hände var att programmet lade till en väntetid på stationer som man bara passerar.
                Detta fixade jag genom att bara lägga till väntetid om man byter linje.
            </p>
            <h5>Tvärkommunikation</h5>
            <p>
                En grej man kan använda för att snabba upp resan är att använda tvärkommunikation. Det är trafik som går mellan två stationer.
                Här är kommunikationen jag tar hänsyn till:
            </p>
            <ul>
                <li>akalla ↔ hjulsta</li>
                <li>fruängen ↔ hagsätra</li>
                <li>fruängen ↔ farsta strand</li>
                <li>fruängen ↔ skarpnäck</li>
                <li>odenplan ↔ ropsten</li>
            </ul>
            <h5>Början och slut</h5>
            <p>
                Jag simulerar bara början och slut med hässelby strand och norsborg.
                Det skulle inte vara någon idé att åka de långa sträckorna bara för att sedan åka tillbaks.
                Detta kortar ner körtiden av mitt program till ca. 2 timmar.
            </p>
            </>
        )
    }

    manifest() {
        return (
            {
                languages: ["en", "sv"],
                name: {
                    en: "subway race",
                    sv: "tunnelbanerace"
                },
                id: "subway-race",
                time: "1653084744",
            }
        )
    }
}

