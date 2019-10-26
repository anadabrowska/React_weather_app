import React from "react";

const Form = props => (
<form onSubmit = {props.getWeather}>
    <input className = "input" type = "text" name = "city" placeholder = "city"></input>
    <input  className = "input" type = "text" name = "country" placeholder = "country"></input>
    <button id = "getWeather">Get Weather</button>
</form>
);
export default Form;