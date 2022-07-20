import './App.css';
import TourList from './components/TourList'
import {useState} from 'react';
import Mode from './components/Mode/Mode';
import Footer from './components/Footer/Footer';


function App() {
  const [mode, setMode] = useState({current:"day"})
  
  return (
  <div className="App">
    <Mode mode={mode} changeMode = {setMode}/>
    <TourList mode={mode}/>
    <Footer mode={mode}/>
  </div>   
  )
}

export default App;
