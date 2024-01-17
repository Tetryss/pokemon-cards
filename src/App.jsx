import { useState } from "react";
import Card from "./Card";
import "./App.css";
function App() {
  const [lst, setLst] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;

    async function search() {
      const response = await fetch(URL + name.toLowerCase());
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const hp = data.stats[0].base_stat || "NULL";
        const atk = data.stats[1].base_stat || "NULL";
        const def = data.stats[2].base_stat || "NULL";
        const shiny = data.sprites.other["official-artwork"].front_shiny;
        const type = data.types[0].type.name;

        const item = {
          img: data.sprites.other["official-artwork"].front_default,
          name,
          hp,
          atk,
          def,
          shiny,
          type,
        };
        console.table(item);
        setLst((prevLst) => [...prevLst, item]);
      }
    }
    search();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          placeholder="Enter a Pokemon Name!"
        />
        <button type="submit">Search!</button>
      </form>
      <div className="Holder">
        {lst.map((x) => {
          return (
            <Card
              key={x.name} // Necessary unique identifier
              name={x.name}
              image={x.img}
              hp={x.hp}
              atk={x.atk}
              def={x.def}
              shine={x.shiny}
              pkmnType={x.type}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
