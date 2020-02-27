import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css';

interface State {
  value: string
}

const App = () => {
  return (
    <>
    <div className="App">
      <Header/>
      <div className="App-header">
        <Body/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;