const request = require('request')
const url = 'https://api.darksky.net/forecast/84ce12fdf4ca3f71f1093a0927ba9161/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data);
})