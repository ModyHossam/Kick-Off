"use client"

import { useState } from "react"
import Button from "@/Componanats/UiElements/Button"

import classes from "./page.module.css"

export default function MatchesPage() {
    const [counter, setCounter] = useState(0);
    const [showList, setShowList] = useState(false)

    const increaseCounter = () => {
        if (counter >= 10) return;
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        if (counter <= 0) {return};
        setCounter(counter - 1)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const toggle = () => setShowList(!showList)

    return (
        <section>
            <h2>Matches Page</h2>
            <div>
                <p>{ counter }</p>
                <section className={classes["btns-section"]}>
                    <Button onClick={increaseCounter} disabled={counter >= 10}>+</Button>
                <Button onClick={decreaseCounter} outline disabled={counter < 0}>-</Button>
                <Button onClick={resetCounter} danger disabled={counter === 0}>reset</Button>
                </section>
            </div>

            <br />
            <hr />
            <br />

            <div>
                <Button onClick={toggle} outline={showList}>{showList ? "Hide" : "Show"} menu</Button>
                
                <ul className={`${classes["list"]} ${!showList ? classes["hide"] : ""}`}>
                    <li>ITEM 1</li>
                    <li>ITEM 2</li>
                    <li>ITEM 3</li>
                    <li>ITEM 4</li>
                </ul>
            </div>
        </section>
    )
}

