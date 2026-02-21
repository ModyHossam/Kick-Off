"use client"

import Button from "@/Componanats/UiElements/Button";
import { useState } from "react";
import classes from "./page.module.css"

export default function ContactsPage(params) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name);
        console.log(email);
        console.log(text);

        if (name.trim().length === 0 || !email.includes("@")) {
            setNameError("please provie a valid name!")
            setEmailError("An Email should include ( @ ) sign!");
            return;
        }

        
        
    
        setName("")
        setEmail("")
        setText("")
    }
    
    return <form className={classes["contact-form"]} onSubmit={handleSubmit}>
        <h3>Contact us</h3>

        <div className={classes["input-form"]}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value); setNameError("")}}/>
            {nameError && <p className={classes["error"]}>{nameError}</p>}
        </div>

        <div className={classes["input-form"]}>
            <label htmlFor="email">Your Email</label>
            <input type="text" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            {emailError && <p className={classes["error"]}>{emailError}</p>}

        </div>

        <div className={classes["input-form"]}>
            <label htmlFor="text">Messsage</label>
            <input type="text" id="text"  value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <Button>Submit</Button>
    </form>
}