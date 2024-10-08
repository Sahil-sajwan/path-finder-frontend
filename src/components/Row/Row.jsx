import React from "react";
import Block from "../Block/Block";
import "./Row.css";
function Row(props) {
  const row = [];
  for (let i = 0; i < 20; ++i) {
    row.push(i);
  }

  return (
    <div className="row">
      {row.map((block) => {
        return <Block key={block} coordinates={{ r: props.row, c: block }} points={props.points} setPoints={props.setPoints}/>;
      })}
    </div>
  );
}

export default Row;
