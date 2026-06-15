"use client";

import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function ScoreGauge({ score }) {
    return (
        <div className="mx-auto w-56 h-56">

            <CircularProgressbar
                value={score}
                text={`${score}%`}
                styles={buildStyles({
                    pathColor: "#8b5cf6",
                    trailColor: "#1f2937",
                    textColor: "#ffffff",
                    textSize: "12px",
                })}
            />

        </div>
    );
}