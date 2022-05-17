import React from "react";

export default class TunnelbaneRace extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Tunnelbanerace</h2>
            </div>
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

