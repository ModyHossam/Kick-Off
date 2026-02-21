import classes from "./Pl.module.css"

export default function PL() {
    return (
        <section>
            <h2 className={classes["title"]}>Popular leagues</h2>
            <div className={classes["leagues"]}>
                <h3>Primier league</h3>
                <h3>La Liga</h3>
                <h3>Serie A</h3>
                <h3>Bundesliga</h3>
                <h3>Ligue 1</h3>
            </div>
        </section>
    )
}