import React from "react";
import Img from "react-image";

const Titles = () => (
<div>
    <img src = {require('../img/bridge.jpg')} class="centerImg"/>
    <h1 id = "mainTitle" className = "titles">Weather Search</h1>
    <p id = "subTitle" className = "titles"> Find out current temperature, conditions and more ...</p>
</div>
);
export default Titles;