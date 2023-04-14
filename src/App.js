import logo from './logo.svg';
import athem from './athem.png';
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
        <img src={athem} className="App-logo" alt="logo" />
        <p>
          Welcome <code>TO</code>
          </p>
          <h1>ATHEM</h1>
        <Icon.Coffee />
        </header>
        <main className="App-main">
        <p>
        Athem is a pioneering company leading the charge towards a smarter, greener future.
        With a mission to harness the power of technology and smart devices, Athem is revolutionizing the way we approach sustainability and environmental conservation – one home, one community, and one city at a time.
        </p>
        <p>How do you take your coffee?</p>

        </main>
      <footer class="App-footer">
        <a id="insta"
          className="App-link"
          href="https://www.instagram.com/tryecoshirts/"
          target="_blank"
          rel="noopener noreferrer"
        ><Icon.Camera />
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/company/athemsolutions/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.Linkedin />
        </a>
        <a
          className="App-link"
          href="https://github.com/shreshthmehta1"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.GitHub />
        </a>
        <a
          className="App-link"
          href="https://twitter.com/@athem108"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.Twitter />
        </a>
        <a
          className="App-link"
          href="mailto:shreshthmehta1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.Mail />
        </a>
        </footer>
    </div>
  );
}

export default App;
