import React, { useEffect, useState } from 'react'

const UseLocalStorage = (key,defaultValue) => {

    const [value,SetValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        }catch(error){
            console.log(error)
            currentValue = defaultValue;
        }
        return currentValue;
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])



    return [value,SetValue];
}

export default UseLocalStorage