import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then((response) => {
        setNext(response.info.next);
        setCharacterList(response.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(next)
      .then((response) => response.json())
      .then((response) => {
        setCharacterList([...characterList, ...response.results]);
        setNext(response.info.next);
      })
      .catch((err) => console.log(err));
  }, [characterList]);

  return (
    <div className="App">
      <div className="App-header">
        <Characters characterList={characterList} />
      </div>
    </div>
  );
}

export default App;
