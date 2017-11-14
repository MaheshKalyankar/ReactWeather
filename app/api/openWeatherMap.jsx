var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=5208101b4b8a6d08a2b6c2fb4a11253c&units=metric';

module.exports= {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function (res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.response.data.message);
        });
    }
}