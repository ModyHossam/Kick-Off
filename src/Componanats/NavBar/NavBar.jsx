"use client"

import Link from "next/link"
import NavigationLink from "./NavLink"

import styles from "./NavBar.module.css"
import { useState } from "react"

export default function Navigation() {
    const [showNav, setShowNav] = useState(false);

    const toggle = () => setShowNav(!showNav)
    
    return (
        <nav className={styles["nav"]}>
            <h1 className={styles["title"]}>
                <Link href="/">Kick</Link>
            </h1>

            <ul className={`${styles["links"]} ${showNav ? styles["show"] : ""}`} >
                <NavigationLink href="/" text="Home"/>
                <NavigationLink href="/matches" text="Matches"/>
                <NavigationLink href="/news" text="News"/>
                <NavigationLink href="/championships" text="Championships"/>
                <NavigationLink href="/contacts" text="Contact Us"/>
            </ul>

            <button onClick={toggle}  className = {styles["menuButton"]}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}