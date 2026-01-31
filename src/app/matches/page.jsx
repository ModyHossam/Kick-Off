"use client"

import { useState } from "react"

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
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
                <button onClick={resetCounter}>reset</button>
            </div>

            <div>
                <button onClick={toggle}>{showList ? "Hide" : "Show"} menu</button>
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

