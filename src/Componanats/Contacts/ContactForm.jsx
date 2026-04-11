"use client"

import { useState } from "react"
import Button from "../UiElements/Button"
import { isEmpty, isEmail, minLength } from "@/helpers/validators"
import classes from "./ContactForm.module.css"


export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [textError, setTextError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name);
        console.log(email);
        console.log(text);

        if (isEmpty(name) || !isEmail(email) || !minLength(text)) {
            if (isEmpty(name)) {
                setNameError(true)
            }

            if (!isEmail(email)) {
                setEmailError(true)
            }

            if (!minLength(text)) {
                setTextError(true)
            }
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