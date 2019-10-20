import React from "react";

let newImage = true;
const img = document.createElement("img");

const setImg = icon => {
    img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    if(newImage){
        img.setAttribute("height", "120");
        img.setAttribute("width", "120");
        document.getElementById("main").appendChild(img);
        newImage = false;
    }
}

const Weather = props => (
    <div id="main">
        {props.icon &&
         setImg(props.icon)}
        {props.city && props.country &&
        <p>Location: {props.city}, {props.country}</p>}
        { props.temperature && 
        <p>Temperature: {Math.floor(props.temperature - 273)}</p>}
        {props.humidity && 
        <p>Humidity: {props.humidity}</p>}
        {props.description && 
        <p>Conditions: {props.description}</p>}
        {props.error &&
        <p>{props.error}</p>}
    </div>
);
export default Weather;