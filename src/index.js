import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

const ncard = (val, index)=> {
  return (
    <Card
      sname={val.sname}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.links}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading_style">List of TOP NetFlix Orignal Series</h1>
    {Sdata.map(ncard)} 
  </>,
  document.getElementById("root")
);


/*
function ncard(val){

}
//fat arrow function

const ncard = (val)=> {

}
*/