"use client";

import { useEffect, useReducer, useState } from "react";
import Button from "../UiElements/Button";


export default function StopWatch() {
  function reducer(state, action) {
      const { type } = action;
      const currentTime = Date.now() - state.startTime + state.elapsedTime;
  
      switch (type) {
        case "START":
          if (state.isRunning) {
            return
          } else {
            return {  time: 0, startTime: Date.now(), elapsedTime:0, isRunning: true, }

          }
          
          case "PAUSE":  
          return { ...state, time: currentTime,  elapsedTime: currentTime, isRunning: false};  
          case "RESUME":
            return { ...state, startTime: Date.now(), isRunning: true, };  
          case "RESET":
            return {
              time: 0, startTime: null, elapsedTime: 0, isRunning: false,} 
      }
        
  
  }

  const initialState = {
    time: 0,
    startTime: null,
    elapsedTime: 0,
    isRunning: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  

  const startr = () => dispatch({ type: "START"})
  const pauser = () => dispatch({ type: "PAUSE"})
  const resumer = () => dispatch({ type: "RESUME"})
  const resetr = () => dispatch({ type: "RESET"})




  useEffect(() => {
    if (state.isRunning === false) return;

    const interval = setInterval(() => {
      initialState.time = (Date.now() - state.startTime + state.elapsedTime);
    }, 10);

    return () => clearInterval(interval);
  }, [state.isRunning, state.startTime, state.elapsedTime]);

  const minutes = Math.floor(state.time / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((state.time % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  const mill = Math.floor((state.time % 1000) / 10)
    .toString()
    .padStart(2, "0");

  return (
    <div>
      <p>
        {minutes}:{seconds}.{mill}
      </p>

      <div>
        {state.isRunning === false && state.elapsedTime === 0 ? (
          <Button success onClick={startr} disabled={state.isRunning === true}>
            Start
          </Button>
        ) : (
          <Button outline onClick={resumer} disabled={state.isRunning === true}>
            Resume
          </Button>
        )}

        <Button danger onClick={pauser} disabled={state.isRunning === false}>
          Pause
        </Button>

        <Button onClick={resetr}>Reset</Button>
      </div>
    </div>
  );
}