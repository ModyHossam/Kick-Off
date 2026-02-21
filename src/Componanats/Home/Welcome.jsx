import Image from "next/image"
import classes from "./Welcome.module.css"
import Button from "../UiElements/Button"

export default function Welcome() {
    return <section className={classes["welcome"]}>
        <div className={classes["text"]}>
            <p className={classes["hello"]}>Welcome</p>
            <p className={classes["description"]}>Watch All Matches Now !</p>
            <p className={classes["lorem"]}>Watch all matches from all the leagues, follow all the championships and follow the latest news for free ! </p>
        <div className={classes["btns"]}>
            <Button href="/matches">Matches</Button>
            <Button outline>Championships</Button>
        </div>
        </div>


        

        
    </section>
}