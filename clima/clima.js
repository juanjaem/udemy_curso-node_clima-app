const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=b9bd935aaa2e12812a1527e940673382`);

    if(resp.data.cod !== 200) {
        throw new Error('Ha ocurrido algún error en la parte de obtecion de clima');
    }

    return resp.data.main.temp;

};

module.exports = {
    getClima
};