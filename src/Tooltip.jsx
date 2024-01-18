import { useState, useRef } from "react";

function Tooltip({ info }) {
  const [visibility, setVisibility] = useState(false);
  function handleEnter() {
    setVisibility(true);
  }

  function handleLeave() {
    setVisibility(false);
  }

  return (
    <>
      <div className="TOOLTIP">
        i
        {
          <div className="INFOTIP">
            <p>Abilities</p>
            {info.map((x) => {
              return (
                <p key={x.ability.name} className="ability">
                  {x.ability.name}
                </p>
              );
            })}
          </div>
        }
      </div>
    </>
  );
}

export default Tooltip;
