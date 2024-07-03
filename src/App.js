import './App.css';
import React from 'react';
import * as Icon from 'react-feather';
import dp from './front.jpg';
import akm from './cover.png';

// const App = () => {
//   return <Icon.Camera />
// };

// export default App;
function App() {
  return (
    <div className="App">
  
      <header className="App-header">
        <img className="App-logo" alt="DR AK MEHTA" src={akm}/>
          <h1>Dr. A. K. Mehta</h1>
          {/* <h5> Amplifying Success</h5> */}
        <a className="App-head" href="https://aws.amazon.com/what-is-cloud-computing"><img height="27px" src="https://d0.awsstatic.com/logos/powered-by-aws.png" alt="Powered by AWS Cloud Computing"></img></a>
        </header>
  
  
        <main className="App-main">
        <br/>

        </main>
    </div>
  );
}

export default App;