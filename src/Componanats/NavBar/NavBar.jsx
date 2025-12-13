import Link from "next/link"
import NavigationLink from "./NavLink"

import styles from "./NavBar.module.css"

export default function Navigation() {
    return (
        <nav className={styles["nav"]}>
            <h1 className={styles["title"]}>
                <Link href="/">Kick</Link>
            </h1>

            <ul className={styles["links"]}>
                <NavigationLink href="/" text="Home"/>
                <NavigationLink href="/matches" text="Matches"/>
                <NavigationLink href="/news" text="News"/>
                <NavigationLink href="/championships" text="Championships"/>
                <NavigationLink href="/contacts" text="Contact Us"/>
            </ul>

            <button className={styles["menuButton"]}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}