import Link from "next/link"
import classes from "./Button.module.css"

export default function Button({children, onClick, danger, outline, href}) {
    const classN = ` ${classes["button"]} ${danger ? classes["danger"] : ""} ${outline ? classes["outline"] : ""}`
    return href ? 
        <Link href={href} className={classN}>{children}</Link>
     : <button onClick={onClick} className={classN}>{children}</button>
}