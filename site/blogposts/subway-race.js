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
            <p>En vacker dag ploppade &nbsp;
                <a style={{color: "#0ff", textDecoration: "underline"}} href="https://www.youtube.com/watch?v=6jxmgdgeDCY">den här</a>
                &nbsp;videon upp i mitt youtubeflöde</p>
            <p>
                Det är en video där en kille och hans vänner tar sig till alla tunnelbanestationer i stockholm på kortast tid.
                När jag såg den tänkte jag att jag skulle kunna försöka med samma grej,
                det passar ju bra att göra den i sommar för att då får jag och mina vänner gratis sommarlovskort av sl.
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
                de är för att separera vägarna. Då är det bara att vara på varje väg
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
                <li>fruängen ↔ älvsjö</li>
                <li>älvsjö ↔ hagsätra</li>
                <li>älvsjö ↔ farsta strand</li>
                <li>älvsjö ↔ skarpnäck</li>
                <li>odenplan ↔ ropsten</li>
            </ul>
            <h5>Början och slut</h5>
            <p>
                jag räknar bara med hässelby strand och norsborg som ställen man kan börja och sluta på.
            </p>
            <h5>Resultat</h5>
            <table class="table table-bordered table-hover table-condensed"><thead><tr><th title="Field #1">avgångsplats</th><th title="Field #2">destination</th><th title="Field #3">linje</th><th title="Field #4">avgångstid</th><th title="Field #5">tid där</th><th title="Field #6">färdtid</th><th title="Field #7">väntetid innan</th><th title="Field #8">kommentar</th></tr></thead><tbody><tr><td>hässelby strand</td><td>fridhemsplan</td><td>19</td><td>10:07</td><td>10:32</td><td>25min</td><td>0min</td><td> </td></tr><tr><td>fridhemsplan</td><td>rådhuset</td><td>11</td><td>10:33</td><td>10:35</td><td>2min</td><td>1min</td><td> </td></tr><tr><td>rådhuset</td><td>t-centralen</td><td>11</td><td>10:35</td><td>10:37</td><td>2min</td><td>0min</td><td> </td></tr><tr><td>t-centralen</td><td>kungsträdgården</td><td>11</td><td>10:37</td><td>10:39</td><td>2min</td><td>0min</td><td> </td></tr><tr><td>kungsträdgården</td><td>t-centralen</td><td>11</td><td>10:39</td><td>10:40</td><td>1min</td><td>0min</td><td> </td></tr><tr><td>t-centralen</td><td>odenplan</td><td>43</td><td>10:41</td><td>10:43</td><td>2min</td><td>1min</td><td> </td></tr><tr><td>odenplan</td><td>fridhemsplan</td><td>17</td><td>10:44</td><td>10:47</td><td>3min</td><td>1min</td><td> </td></tr><tr><td>fridhemsplan</td><td>västra skogen</td><td>10</td><td>10:48</td><td>10:52</td><td>4min</td><td>1min</td><td> </td></tr><tr><td>västra skogen</td><td>hjulsta</td><td>10</td><td>10:52</td><td>11:06</td><td>14min</td><td>0min</td><td> </td></tr><tr><td>hjulsta</td><td>akalla</td><td>517</td><td>11:10</td><td>11:22</td><td>12min</td><td>4min</td><td> </td></tr><tr><td>akalla</td><td>västra skogen</td><td>11</td><td>11:26</td><td>11:40</td><td>14min</td><td>4min</td><td> </td></tr><tr><td>västra skogen</td><td>fridhemsplan</td><td>11</td><td>11:40</td><td>11:43</td><td>3min</td><td>0min</td><td> </td></tr><tr><td>fridhemsplan</td><td>odenplan</td><td>18</td><td>11:46</td><td>11:49</td><td>3min</td><td>3min</td><td>långt fram i tåget</td></tr><tr><td>odenplan</td><td>ropsten</td><td>6</td><td>11:50</td><td>12:10</td><td>20min</td><td>1min</td><td>spring frammåt i tågets riktning buss 6 avgår på själva odenplan</td></tr><tr><td>ropsten</td><td>östermalmstorg</td><td>13</td><td>12:13</td><td>12:19</td><td>6min</td><td>3min</td><td> </td></tr><tr><td>östermalmstorg</td><td>mörby centrum</td><td>14</td><td>12:23</td><td>12:35</td><td>12min</td><td>4min</td><td> </td></tr><tr><td>mörby centrum</td><td>östermalmstorg</td><td>14</td><td>12:40</td><td>12:52</td><td>12min</td><td>5min</td><td> </td></tr><tr><td>östermalmstorg</td><td>t-centralen</td><td>14</td><td>12:52</td><td>12:56</td><td>4min</td><td>0min</td><td>byt till grön linje</td></tr><tr><td>t-centralen</td><td>slussen</td><td>14</td><td>12:56</td><td>12:59</td><td>3min</td><td>0min</td><td>byt till grön linje</td></tr><tr><td>slussen</td><td>gullmarsplan</td><td>17</td><td>13:01</td><td>13:07</td><td>6min</td><td>2min</td><td> </td></tr><tr><td>gullmarsplan</td><td>skärmarbrink</td><td>17</td><td>13:07</td><td>13:08</td><td>1min</td><td>0min</td><td> </td></tr><tr><td>skärmarbrink</td><td>skarpnäck</td><td>17</td><td>13:08</td><td>13:18</td><td>10min</td><td>0min</td><td> </td></tr><tr><td>skarpnäck</td><td>skärmarbrink</td><td>17</td><td>13:20</td><td>13:28</td><td>8min</td><td>2min</td><td> </td></tr><tr><td>skärmarbrink</td><td>farsta strand</td><td>18</td><td>13:35</td><td>13:48</td><td>13min</td><td>7min</td><td> </td></tr><tr><td>farsta strand</td><td>älvsjö station</td><td>43 (norr)</td><td>13:54</td><td>14:00</td><td>6min</td><td>6min</td><td>byt till pendeltåg</td></tr><tr><td>älvsjö station</td><td>hagsätra</td><td>143</td><td>14:10</td><td>14:21</td><td>11min</td><td>10min</td><td>byt till buss</td></tr><tr><td>hagsätra</td><td>gullmarsplan</td><td>19</td><td>14:32</td><td>14:46</td><td>14min</td><td>11min</td><td>byt till tub</td></tr><tr><td>gullmarsplan</td><td>slussen</td><td>19</td><td>14:46</td><td>14:52</td><td>6min</td><td>0min</td><td> </td></tr><tr><td>slussen</td><td>liljeholmen</td><td>14</td><td>14:53</td><td>15:00</td><td>7min</td><td>1min</td><td>byt till röd (annan våning)</td></tr><tr><td>liljeholmen</td><td>fruängen</td><td>14</td><td>15:00</td><td>15:09</td><td>9min</td><td>0min</td><td> </td></tr><tr><td>fruängen</td><td>liljeholmen</td><td>14</td><td>15:10</td><td>15:18</td><td>8min</td><td>1min</td><td> </td></tr><tr><td>liljeholmen</td><td>norsborg</td><td>13</td><td>15:24</td><td>15:51</td><td>27min</td><td>6min</td><td> </td></tr></tbody></table>
            <h5>Källkod</h5>
            <p>
                Du hittar källkoden till programmet&nbsp;
                <a style={{color: "#0ff", textDecoration: "underline"}} href="https://github.com/dojje/tunnelbanerace">här</a>.
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
                lastEdited: "1653084744",
                published: "1653084744"
            }
        )
    }
}

