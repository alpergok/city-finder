
let nearestCities = []
const isNear = (location, comparedLocation) => {

     const radius = 0.9;
    
     const distance = Math.sqrt(Math.pow((location.lat-comparedLocation.lat), 2)
                                 + Math.pow((location.lng - comparedLocation.lng), 2) )       
     if(radius > distance){
        comparedLocation.distanceFromLoc = distance
        nearestCities.push(comparedLocation)
        return true;
     }

    else return false;
}

const searchFilter = (location, fullJson) =>{

  if(location.lat < 36.0 || location.lat > 42.0 || location.lng < 26 || location.lng > 45.0){
    alert("Lütfen Türkiye sınırları içerisinde bir koordinat giriniz.")
  }  
  else
  nearestCities = []
  fullJson.filter(
    loc => isNear(location, {city: loc.city, county: loc.county, lat: loc.centerLat, lng: loc.centerLon})
  );
   
    nearestCities.sort(function(a, b){return b.distanceFromLoc - a.distanceFromLoc}).reverse();
    return nearestCities.slice(0,3);
}
export default searchFilter