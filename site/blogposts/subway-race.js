import React from "react";
import Page from "../components/page";

export default class TunnelbaneRace extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h1>hey guys</h1>
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
                time: "1652797830",
            }
        )
    }
}

