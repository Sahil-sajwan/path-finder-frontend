import React,{useState} from "react";
import Row from "../Row/Row";

function Grid() {
    const [points,setPoints]=useState([])
  const grid = [];
  for (let i = 0; i < 20; ++i) {
    grid.push(i);
  }
  return (
    <div>
      {grid.map((row) => {
        return <Row key={row} row={row} points={points} setPoints={setPoints} />;
      })}
    </div>
  );
}

export default Grid;
