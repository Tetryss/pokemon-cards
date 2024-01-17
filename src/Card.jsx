import { useState, useRef } from "react";

const colors = {
  normal: ["#D5D5AE", "#E6E6C6", "#FFFFE6"],
  fire: ["#F2B583", "#FAC8A8", "#FFEB99"],
  water: ["#8AA8F7", "#B8D4F7", "#D1EEFD"],
  electric: ["#FCEC97", "#FDE8B9", "#FFFFE6"],
  grass: ["#AEDCA3", "#C9EBC9", "#D9EFD1"],
  ice: ["#BCEAEA", "#D6F5F5", "#E6FAFA"],
  fighting: ["#E88781", "#EFA8A3", "#EFCFBB"],
  poison: ["#D18BC1", "#DBA9DA", "#DDC9DD"],
  ground: ["#EFDFA5", "#F4EDC6", "#F8F4E3"],
  flying: ["#C1B3F7", "#D5D0F9", "#EDEAF9"],
  psychic: ["#FCA6BB", "#FDBFD4", "#FFDFEB"],
  bug: ["#C6D68A", "#DCE7B8", "#F2F5E8"],
  rock: ["#D8D2A7", "#E5E2BE", "#EFEADA"],
  ghost: ["#BAA4CC", "#D0C2E1", "#E1D5EC"],
  dragon: ["#9A8EFD", "#C2B2F4", "#DBCBE8"],
  dark: ["#8C7B6F", "#B2A298", "#C5BAB3"],
  steel: ["#CCCCE3", "#E1E1F0", "#F0F0FA"],
  fairy: ["#E4BFD4", "#F8D9DC", "#FEF3FF"],
};

function Card({ name, image, hp, atk, def, shine, pkmnType }) {
  const [img, setImg] = useState(image);
  const cardRef = useRef();

  function hoverHandler() {
    setImg(shine);
  }

  function mouseOut() {
    setImg(image);
  }

  return (
    <div
      ref={cardRef}
      className="sampleCard"
      style={{ backgroundColor: colors[pkmnType][0] }}
    >
      <h1 className="pokeName">{name}</h1>
      <h1 className="pkmntype">{pkmnType}</h1>
      <img
        style={{ backgroundColor: colors[pkmnType][1] }}
        onMouseOver={hoverHandler}
        onMouseOut={mouseOut}
        src={img}
        alt={`${name} sprite`}
        width="150px"
      />
      <div className="stats">
        <h2 style={{ backgroundColor: colors[pkmnType][2] }}>HP: {hp}</h2>
        <br />
        <h2 style={{ backgroundColor: colors[pkmnType][2] }}>Attack: {atk}</h2>
        <br />
        <h2 style={{ backgroundColor: colors[pkmnType][2] }}>Defense: {def}</h2>
      </div>
    </div>
  );
}

export default Card;
