import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main className="App-main">
          <h1>
           Jan Henrik Levertand
          </h1>
          <h2>
            12 asja, mis mulle meeldivad:
          </h2>
          <ul>
            <li>korvpall</li>
            <li>sarah:((</li>
            <li>kassid</li>
            <li>kui ropz ace teeb</li>
            <li>väike trip kuhugi</li>
            <li>zazong</li>
            <li>hea youtube video</li>
            <li>hommikul sissemagamine</li>
            <li>kena higine trenn</li>
            <li>hessi kupongid</li>
            <li>mustalt töö tegemine</li>
            <li>karamellijäätis</li>
          </ul>
          <form>
            <label>
              Nimi: 
              <input type = "text"/>
            </label>
            <br/>
            <label>
              Email: 
              <input type = "text"/>
            </label>
            <br/>
            <label>
              Lemmik Eesti youtuber: 
              <input type = "text"/>
            </label>
            <br/>
            <button type = "submit">Send it</button>
          </form>
        </main> 
      </header>
    </div>
  );
}

export default App;
