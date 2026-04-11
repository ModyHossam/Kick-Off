"use client"

import { useEffect, useState } from "react"

export default function About() {
    const [name, setName] = useState("moahmed")
    useEffect(() => {
        console.log("use-effect:", name);
        
    }, [name])
    return <div>
        <h2>Hello</h2>
        <input type="search" placeholder="Write here" value={name} 
        onChange={(e) => setName(e.target.value)}/>
    </div> 
}