import { useState } from "react";

export const useLocalStorage = (key, initialValues)=>{

    const [state, setState]= useState(()=>{
        const persistedStateSerialized = localStorage.getItem(key)
        if(persistedStateSerialized){
           const persistedState = JSON.parse(persistedStateSerialized)
           return persistedState
        }
        return initialValues

    })

    const setLocalStorage = (value)=>{
        if (typeof value === 'function') {
            const result = value();
            setState(result);
            localStorage.setItem(key, JSON.stringify(result));
          } else {
            setState(value);
            localStorage.setItem(key, JSON.stringify(value));
          }
    }
   return [state, setLocalStorage]
}