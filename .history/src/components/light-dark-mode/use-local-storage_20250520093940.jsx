import { useState } from "react";

export default function useLocalStorage(key, defaulValue) {
    let currentValue;
    try {
        currentValue = jso
    } catch (error) {
        console.log(error);
        currentValue = defaulValue
    }
}