import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "39602120bbda233ad9370aa4b595bf2a";

class App extends React.Component {
    state = {
        icon: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const ApiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await ApiCall.json();
        if(city && country){
            //can be deleted later
            console.log(data);
            this.setState({
                icon: data.weather[0].icon,
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: undefined
            });
        }else{
            this.setState({
                icon: undefined,
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Enter the values"
            });
        }
    }
    render(){
        return (
            <div>
                <div className = "wrapper">
                    <div className = "main">
                        <div className = "col-md-8 offset-md-2 container">
                            <Titles />
                            <Form  getWeather={this.getWather}/>
                            <Weather 
                                icon = {this.state.icon}
                                temperature = {this.state.temperature}
                                city = {this.state.city}
                                country = {this.state.country}
                                humidity = {this.state.humidity}
                                description = {this.state.description}
                                error = {this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;