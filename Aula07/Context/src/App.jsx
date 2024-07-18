import MyChildren from "./components/Filho"
import { MyProvider } from "./components/Contexto"
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })


function App() {
  
const [ theme, setTheme ] = useState('light')

const toggleTheme = () => {
  setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
}
  return (
    <>
    <MyProvider>
     <MyChildren/> 
     </MyProvider>
    <br />
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div style={{background: theme === 'dark' ? 'grey' : 'white', color: theme === 'dark' ? 'white' : 'grey'}}>
            <Toolbar/>
          </div>
            <button onClick={toggleTheme}>Tema utilizado - {theme} </button>
     </ThemeContext.Provider>
    </>
  )
}

function Toolbar() {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      Tema utilizado - {theme}
    </div>
  )
}
export default App
