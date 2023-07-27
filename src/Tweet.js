import './App.css';
import React from 'react';
import * as Icon from 'react-feather';

// const App = () => {
//   return <Icon.Camera />
// };

// export default App;
function Tweet() {
  return (
    <div className="App">
        <main className="App-main">
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">GOLD <a href="https://t.co/9aKqq8R7jC">https://t.co/9aKqq8R7jC</a> via <a href="https://twitter.com/amazon?ref_src=twsrc%5Etfw">@amazon</a></p>&mdash; Shreshth Mehta (@athem108) <a href="https://twitter.com/athem108/status/1672194260458778626?ref_src=twsrc%5Etfw">June 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <br/>
        <br/>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rewind ! All or Nothing: Arsenal <a href="https://t.co/W39HwXite6">https://t.co/W39HwXite6</a> via <a href="https://twitter.com/amazon?ref_src=twsrc%5Etfw">@amazon</a></p>&mdash; Shreshth Mehta (@athem108) <a href="https://twitter.com/athem108/status/1673905299252740096?ref_src=twsrc%5Etfw">June 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <br/>
        <br/>
        <p>“As an Amazon Associate I earn from qualifying purchases.”</p><br/>
        <p>How do you take your Coffee ?</p>
        </main>

      <footer class="App-footer">
        
        <a
          className="App-link"
          href="https://www.linkedin.com/in/shreshth-mehta-5a867361/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.Linkedin />
        </a>
        <a
          className="App-link"
          href="https://twitter.com/athem108"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.Twitter/>
        </a>
        <a
          className="App-link"
          href="https://github.com/shreshthmehta1"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.GitHub/>
        </a>

        <a
          className="App-link"
          href="https://www.instagram.com/s.athem/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.Instagram/>
        </a>

        <a
          className="App-link"
          href="mailto:athem2@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Icon.Mail/>
        </a>
        </footer>

    </div>
  );
}

export default Tweet;



