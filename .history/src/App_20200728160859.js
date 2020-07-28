import React from 'react';
import Header from './Components/Header.js'
import './styles/App.scss'


function App() {
  return (
    <div className="App">
      <Header />
      <nav className= "header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <a href="/">AGENCY.</a>
                    </div>
                    <div className="nav">
                        <span></span>
                        <span></span>
                       
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default App;
