import { useState } from "react"
import MainLayout from "./Layout/MainLayout"

function App() {
  const [ darkMode, setDarkMode] = useState(()=>{
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'light'
  })

  if(!darkMode){
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  else{
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }
  return (
    <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
    <MainLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    </div>
  )
}

export default App
