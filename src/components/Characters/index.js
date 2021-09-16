import "./styles.css";
import CharCard from "../CharCard";

const Characters = ({ characterList }) => {
  return (
    <>
      <h1>Meus personagens</h1>

      {characterList.map((character) => (
        <CharCard character={character} />
      ))}
    </>
  );
};

export default Characters;
