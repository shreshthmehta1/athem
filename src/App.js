// import logo from './logo.svg';
// import athem from './athem.png';
import alexa from './alexa_2.png';
import './App.css';
import React from 'react';
import * as Icon from 'react-feather';

// const App = () => {
//   return <Icon.Camera />
// };

// export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img className="App-logo" alt="Athem" src={athem}/> */}
          <h1>Athem</h1>
        </header>
        <main className="App-main">
          <br/>
          <br/>
          <br/>
        <br/>
        <br/>
        <br/>

        <Icon.Coffee />
        <br/>
        <br/>
        <br/>
        <p>“As an Amazon Associate I earn from qualifying purchases.”</p><br/>
       
          <p>An Alexa device can make your life easier by providing hands-free access to information, entertainment, and home automation controls.</p>
        <p>Proceed to Amazon | Click the icon below</p>
        <a href="https://amzn.to/3BVEJQx"><img alt="" src={alexa}/></a>

        </main>
    </div>
  );
}

export default App;



