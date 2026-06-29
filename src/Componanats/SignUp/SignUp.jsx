"use client";

import { isEmail, isPast, minLength, minL, isEqual } from "@/helpers/validators";
import { useState } from "react";

export const formValidators = { name: minLength, email: isEmail, birthdate: isPast, password: minL, passwordC: isEqual };

export const SignUp = () => {
 const [formState, setFormState] = useState({
    name: { value: "", isValid: false, touched: false },
    email: { value: "", isValid: false, touched: false },
    birthdate: { value: "", isValid: false, touched: false },
    password: { value: "", isValid: false, touched: false },
    passwordC: { value: "", isValid: false, touched: false },
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        isValid: formValidators[name](value),
      },
    }));
  };

  const handleInputTouch = (e) => {
    const { name } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: { ...prev[name], touched: true },
    }));
  };



  // console.log(formState);

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
          value={formState.name.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.name.isValid && formState.name.touched
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
          value={formState.email.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.email.isValid && formState.email.touched
            ? "Please provide a valid email"
            : ""}
        </p>
      </div>

      <div>
        <label htmlFor="birthdate">Birthdate</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formState.birthdate.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.birthdate.isValid && formState.birthdate.touched
            ? "Please provide a valid birthdate"
            : ""}
        </p>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.password.isValid && formState.password.touched
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
          value={formState.password.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.passwordC.isValid && formState.passwordC.touched
            ? "Password Confirm should match password"
            : ""}
        </p>
      </div>
    </form>
  );
};

export default SignUp;