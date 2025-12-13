"use client"

import Link from "next/link"

export default function NavigationLink({href, text}) {
    return (
        <li>
            <Link href={href}>{text}</Link>
        </li>
    )    
}