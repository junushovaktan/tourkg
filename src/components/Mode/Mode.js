import React from 'react';


export  default function Mode({mode, changeMode}) {
  let ChangeModeText = mode.current === "day" ? "Ночной режим" : "Дневной режим"

  const buttonHandler = () => {
    const newValue = mode.current === "day" ? "night": "day"
    changeMode({current: newValue})
  }
  return <button onClick={buttonHandler}>{ChangeModeText}</button>
  
}
