import { string } from "prop-types";
import { useState } from "react";

export default function useLocalStorage(key, defaulValue) {
    let currentValue;
    try {
        currentValue = JSON.parse(localStorage.getItem(key) || string())
    } catch (error) {
        console.log(error);
        currentValue = defaulValue
    }
}