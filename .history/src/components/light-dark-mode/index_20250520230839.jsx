import useLocalStorage from './useLocalStorage'
import './theme.css'

// this is going to use a custom hook to store values in local storage
export default function LightDarkMode () {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handleToggleTheme () {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='light-dark-mode-container'>
        <p>Hello there Prof</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}
