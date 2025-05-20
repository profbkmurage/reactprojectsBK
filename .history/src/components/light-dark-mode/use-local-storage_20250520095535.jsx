import { string } from 'prop-types'
import { useEffect, useState } from 'react'

export default function useLocalStorage(key, defaulValue) {
    const [value, setValue] = useState(() => {
        let currentValue
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || string(defaulValue))
        } catch (error) {
            console.log(error)
            currentValue = defaulValue
        }
        return currentValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
}
