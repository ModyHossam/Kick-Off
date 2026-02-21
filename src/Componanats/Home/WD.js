import classes from "./WD.module.css"
import Image from "next/image"

export default function WD() {
    return(
        <section>
            <h2 className={classes["title"]}>KickOff Developer</h2>
            <div className={classes["info"]}>
                <div>
                    <h3 className={classes["names"]}>Mohamed Hossam</h3>
                    <p className={classes["about"]}>Web App Programer , Learned HTML, CSS ,JS  and React. Programed Many websites.</p>
                </div>
                <div className={classes["img"]}>
            <Image src="/img/Mohamed Hossam.png" alt="Mohamed Hossam" width={447} height={443} loading="eager" />            
        </div>
            </div>
        </section>
    )
}