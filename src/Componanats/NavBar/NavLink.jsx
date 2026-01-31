"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from "./NavLink.module.css"

export default function NavigationLink({href, text}) {
   const pathname = usePathname();
   
   const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
    return (
        <li className={`${isActive ? classes["active"] : ""}`}>
            <Link href={href}>{text}</Link>
        </li>
    )    
}