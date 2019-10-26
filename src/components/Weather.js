import React from "react";

let newImage = true;
const img = document.createElement("img");

const setImg = icon => {
    img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    if(newImage){
        img.setAttribute("height", "120");
        img.setAttribute("width", "120");
        img.setAttribute("class", "weatherImg");
        document.getElementById("result").appendChild(img);
        newImage = false;
    }
}

const Weather = props => (
    <div id="result">
            <div class = "info">
            {props.icon &&
            setImg(props.icon)}
            {props.city && props.country && 
            <p className="weather__key"> Location: 
             <span className="weather__value"> { props.city },
             { props.country }</span>
	 	    </p>}
	        {props.temperature &&
            <p className="weather__key"> Temperature: 
             <span className="weather__value">
            { Math.round(props.temperature - 273) }</span>
	 	    </p>}
	        {props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	    </p> }
	        {props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	        </p>}
            {props.error && <p className="weather__error">
            { props.error }</p>  }
        </div>
    </div>
);
export default Weather;