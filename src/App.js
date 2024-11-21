import './App.css';
import { useContext } from 'react';
import { ApiContext } from './contexts/ApiContext';
import Termekek from './component/Termekek';

function App() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Libri könyvek: </h1>
      </header>
      <article>
      <Termekek termekLista={termekLista} />
      </article>
      <footer>
        <p> Dobszay Dorka</p>
      </footer>
    </div>
  );
}

export default App;
