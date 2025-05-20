import { useState } from "react";

export default function useLocalStorage(key, defaulValue) {
    let currentValue;
    try {
        currentValue
    } catch (error) {
        console.log(error);
        currentValue = defaulValue
    }
}