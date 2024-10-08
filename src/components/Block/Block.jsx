import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPath } from "../../pathSlice";
import "./Block.css";

function Block(props) {
  const [cls, setCls] = useState("block");
  const [coOrd, _] = useState(props.coordinates); 
  const dispatch=useDispatch();
  const path = useSelector((state) => state.path.path);

  function handleClick() {
    setCls((prev) => {
      return prev === "block" ? "block-red" : "block";
    });
   
    if(props.points.length===1){
        let data=new FormData()
        data.append("rowP1",props.points[0].r)
        data.append("colP1",props.points[0].c)
        data.append("rowP2",coOrd.r)
        data.append("colP2",coOrd.c)
        axios.post("http://localhost:8000/find-path",data)
        .then((res)=>{
            dispatch(addPath([res.data,1]))
            
        }).catch((err)=>{
            console.log(err);
        })
        console.log("start and end selected");
    }else{
       props.setPoints(prev=>{
        return [...prev,coOrd];
       })
    }
 
  }

  return <div className={path[coOrd.r][coOrd.c]===0?cls:"block-blue"} onClick={handleClick}></div>;
}

export default Block;
