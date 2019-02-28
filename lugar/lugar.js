const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI( direccion );
      
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }}&key=AIzaSyB443ACn7JPjquVM1q5fZwy2pKb1HQC2rU`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    
    const location = resp.data.results[0];
    const coors = location.geometry.location;
            
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng,
    };

};

module.exports = {
    getLugarLatLng
};
