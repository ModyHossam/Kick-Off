import SignUp from "@/Componanats/SignUp/SignUp";


export const isEmpty = (value) => value.trim().length === 0;
export const isEmail = (value) => value.trim().includes("@");
export const minLength = (value, min = 5) => value.trim().length >= min;
export const isPast = (value) => new Date(value) < new Date();
export const minL = (value, min1 = 8) => value.trim().length >= min1;
export const isEqual = (value) => value.trim().length 
