"use client";

import { useState } from "react";

const SignUp = () => {
  // name email birthdate password passwordConfirm

  const [name, setName] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [email, setEmail] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [password, setPassword] = useState({
    value: "",
    isValid: false,
    touched: false,
  })

  const [passwordC, setPasswordC] = useState({
    value: "",
    isValid: false,
    touched: false,
  })

  const [birthDate, setbirthDate] = useState({
    value: "",
    isValid: false,
    touched: false,
  })

  const handleNameChange = (e) => {
    setName((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value.trim().length >= 3, // true or false
    }));
  };

  const handleEmailChange = (e) => {
    setEmail((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value.includes("@"), // true or false
    }));
  };

  const handlePasswordChange = (e) => {
    setPassword((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value.trim().length >= 8, // true or false
    }));
  };

  const handlePasswordCChange = (e) => {
    setPasswordC((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value === password.value, // true or false
    }));
  };

  
  
  
  const handlebirthDateChange = (e) => {
    const [year, month, day] = e.target.value.split("-");
    console.log(year);
    
    setbirthDate((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: Number(year) < new Date().getFullYear()  &&  Number(month) < new Date().getMonth() + 1 ,
      
      
    }));

    
    
  };
  
  

  const handleNameTouched = () => {
    setName((prev) => ({ ...prev, touched: true }));
  };

  const handleEmailTouched = () => {
    setEmail((prev) => ({ ...prev, touched: true }));
  };

  const handlePasswordTouched = () => {
    setPassword((prev) => ({ ...prev, touched: true }));
  };

  const handlePasswordCTouched = () => {
    setPasswordC((prev) => ({ ...prev, touched: true }));
  };
  
  const handleBirthDateTouched = () => {
    setbirthDate((prev) => ({ ...prev, touched: true }));
  };

  return (
    <form>
      <h3>Create New Account</h3>
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Write your full name"
          value={name.value}
          onChange={handleNameChange}
          onBlur={handleNameTouched}
        />
        <p>
          {!name.isValid && name.touched
            ? "Name should be at least 3 chars"
            : ""}
        </p>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your email"
          value={email.value}
          onChange={handleEmailChange}
          onBlur={handleEmailTouched}
        />
        <p>
          {!email.isValid && email.touched
            ? "Please provide a valid email"
            : ""}
        </p>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Write your password"
          value={password.value}
          onChange={handlePasswordChange}
          onBlur={handlePasswordTouched}
        />
        <p>
          {!password.isValid && password.touched
            ? "Password should be at least 8 chars"
            : ""}
        </p>
      </div>
      
      <div>
        <label htmlFor="passwordC">Password Confirm</label>
        <input
          type="password"
          id="passwordC"
          name="passwordC"
          placeholder="Write your passwordConfirm"
          value={passwordC.value}
          onChange={handlePasswordCChange}
          onBlur={handlePasswordCTouched}
        />
        <p>
          {!passwordC.isValid && passwordC.touched
            ? "Password Confirm should match password"
            : ""}
        </p>
      </div>
      <div>
        <label htmlFor="birthDate">Birth Date</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          placeholder="Write your birth date"
          value={birthDate.value}
          onChange={handlebirthDateChange}
          onBlur={handleBirthDateTouched}
        />
        <p>
          {!birthDate.isValid && birthDate.touched
            ? "Birth Date is not valid"
            : ""}
        </p>
      </div>
    </form>
  );
};

export default SignUp;