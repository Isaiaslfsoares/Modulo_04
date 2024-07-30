import './App.css'
import IPAdressFinder from './components/IPAdressFinder'
import LanguageTranslator from './components/LanguageTranslator'
import MovieSearchEngine from './components/MovieSearchEngine'
import QRCodeGenerator from './components/QRCodeGenerator'
import Login from './components/Login'


function App() {
  
  return (
    <>
      <LanguageTranslator/>
      <br /><hr /><br />
      <MovieSearchEngine/>
      <br /><hr /><br />
      <QRCodeGenerator/>
      <br /><hr /><br />
      <IPAdressFinder/>
      <br /><hr /><br />
      <Login/> 
    </>
  )
}

export default App
