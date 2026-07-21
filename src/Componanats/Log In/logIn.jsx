"use client";

import { isEmail, minLength } from "@/helpers/validators";
import { useCallback } from "react";
import Input from "../UiElements/Input";
import Button from "../UiElements/Button";
import useForm from "@/Componanats/hooks/useForm";
import Image from "next/image"
import classes from "@/Componanats/Log In/logIn.module.css"

const formValidators = {
  email: isEmail,
  password: minLength,
};

const initialState = {
  email: { value: "", isValid: false, touched: false },
  password: { value: "", isValid: false, touched: false },
};

const LogIn = () => {
  const { formState, handleChange, handleTouch, formIsValid } = useForm({
    initialState,
    formValidators,
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("sent");
  }, []);

  return (
    <form className={classes["form"]}>
      <h3 className={classes["h3"]}>Log In</h3>

    <div className={classes["inputs"]}>
      <Input
        id="email"
        type="email"
        name="email"
        label="Your Email"
        placeholder="write an exist email"
        errorText="Please provide a valid email"
        inputState={formState.email}
        onChange={handleChange}
        onBlur={handleTouch}
        className={classes["input"]}
      />

      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        errorText="Password should be at least 6 chars"
        placeholder="***********"
        inputState={formState.password}
        onChange={handleChange}
        onBlur={handleTouch}
        minLength={6}
                className={classes["input"]}

      />
      </div>

    <div className={classes["btns"]}>
      <Button className={classes["logBtn"]} disabled={!formIsValid} onClick={handleSubmit}>
        Log In
      </Button>
      <Button className={classes["GBtn"]}>
            <Image src={"/img/google.jpg"} width={20}
            height={20} className={classes["img"]} />
            Continue with Google
      </Button>
    </div>
    </form>
  );
};

export default LogIn;