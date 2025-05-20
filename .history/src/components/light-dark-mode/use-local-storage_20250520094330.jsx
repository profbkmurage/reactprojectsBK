import { string } from 'prop-types'
import { useState } from 'react'

export default function useLocalStorage(key, defaulValue) {
    const [value, setValue] usest
  let currentValue
  try {
    currentValue = JSON.parse(localStorage.getItem(key) || string(defaulValue))
  } catch (error) {
    console.log(error)
    currentValue = defaulValue
  }
}
