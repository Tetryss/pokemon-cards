import { useState, useRef } from "react";
import Tooltip from "./Tooltip.jsx";

const colors = {
  normal: ["#B3B381", "#CCCDA6", "#E6E6C6"],
  fire: ["#C69361", "#E0B190", "#FFEB99"],
  water: ["#6D80C6", "#94B2D8", "#AFCFFF"],
  electric: ["#E0C46A", "#E8D5A3", "#FFFFE6"],
  grass: ["#90BD7F", "#ADCFA7", "#C3D9BB"],
  ice: ["#9ECBCB", "#B4E4E4", "#CCEDED"],
  fighting: ["#C2746D", "#D1958F", "#DFD4C6"],
  poison: ["#AA6B92", "#C095C1", "#D5C9D5"],
  ground: ["#D9CA7A", "#E3DBC0", "#F1EAD8"],
  flying: ["#A392F7", "#BFB9F9", "#D8D4F9"],
  psychic: ["#E57480", "#EFA8B9", "#FFDFEB"],
  bug: ["#AABF7D", "#C3D9AA", "#F2F5E8"],
  rock: ["#BFB99D", "#D0CEB6", "#EFEADA"],
  ghost: ["#9A86B3", "#BAA6CC", "#CEC1DA"],
  dragon: ["#7C73D0", "#A397E6", "#C0C8F0"],
  dark: ["#706854", "#968A7F", "#ACA29C"],
  steel: ["#AFAFCF", "#CDCDE3", "#E5E5F2"],
  fairy: ["#D99CB3", "#F0C9D0", "#FDE6F6"],
};

function Card({ name, image, hp, atk, def, shine, pkmnType, ability }) {
  const [img, setImg] = useState(image);
  const cardRef = useRef();
  const firstType = pkmnType[0].type.name;
  const secondType = pkmnType[1]?.type.name;

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
      style={{
        background: `linear-gradient(45deg, ${colors[firstType][0]}, ${
          (secondType && colors[secondType][2]) || colors[firstType][2]
        })`,
      }}
    >
      <h1 className="pokeName">{name}</h1>
      <Tooltip info={ability} />
      <div className="typeHolder">
        {pkmnType.map((x) => {
          return (
            <h1 key={x.type.name} className="pkmntype">
              {x.type.name}
            </h1>
          );
        })}
      </div>
      <img
        style={{ backgroundColor: "rgba(29, 26, 49, 0.2)" }}
        onMouseOver={hoverHandler}
        onMouseOut={mouseOut}
        src={img}
        alt={`${name} sprite`}
        width="150px"
      />
      <div className="stats">
        <h2 style={{ backgroundColor: colors[firstType][2] }}>HP: {hp}</h2>
        <br />
        <h2 style={{ backgroundColor: colors[firstType][2] }}>Attack: {atk}</h2>
        <br />
        <h2 style={{ backgroundColor: colors[firstType][2] }}>
          Defense: {def}
        </h2>
      </div>
    </div>
  );
}

export default Card;
