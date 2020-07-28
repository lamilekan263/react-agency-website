import React, {useEffect} from 'react';
import Header from './Components/Header.component.jsx'
import Banner from './Components/banner.component.jsx'
import Cases from './Components/cases.component.jsx'
import './styles/App.scss'


function App() {

  useEffect (()=>{
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
