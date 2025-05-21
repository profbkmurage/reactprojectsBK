import useLocalStorage from './use-local-storage'

// this is going to use a custom hook to store values in local storage
export default function LightDarkMode () {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handleToggleThe(params) {
    
  }

  return (
    <div className='light-dark-mode'>
      <div className='light-dark-mode-container'>
        <p>Hello world</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}
