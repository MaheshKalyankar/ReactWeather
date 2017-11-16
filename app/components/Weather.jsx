var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');



var Weather = React.createClass({
    getInitialState:function(){
        return{
            isLoading:false
        }
    },
    handleSearch:function(location){
        debugger;
        var self = this;
        self.setState({
            isLoading:true,
            errorMessage : undefined
        });
        openWeatherMap.getTemp(location).then(function(temp){  
            debugger;          
            self.setState({
                location:location,
                temp:temp,
                isLoading:false
            });
        }, function (err){
            debugger;
            self.setState({
                isLoading:false,
                errorMessage : err.message
            });
        });        
    },
    render :function () {
        var {isLoading, temp, location, errorMessage} = this.state;
debugger;
        function renderMessage () {
            debugger;
            if(isLoading) {
                return <h3 className="text-center"> featching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
        function renderError () {
            debugger;
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal message ={errorMessage}/>                    
                )
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;