import React from "react";
import Page from "../../components/page";

export default class TunnelbaneRace extends React.Component {
    constructor() {
        super();
    }

    render() {
        let lang = "sv"

        if (lang == "sv"){
            return (
                <Page>
                    <h2>Tunnelbanerace</h2>
                </Page>
            )
        } else if (lang == "en") {
            return (
                <Page>
                    <h2></h2>
                </Page>
            )
        }

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
                time: "1652797830",
            }
        )
    }
}

