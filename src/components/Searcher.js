import React from 'react';
import Search from './Search';
import Map from './Map';
import searchFilter from '../Utils';
import '../app.css';
class Searcher extends React.Component {

    state = {
        coordinates: {
            lat: -1.0,
            lng: -1.0
        },
        nearestCities: []
    }


    searchHandler = (coordinates) => {
        var res = coordinates.split(" ");
        var floatt = res.map(coord =>
            parseFloat(coord)
        )
        var newCoordinates = {
            lat: floatt[0],
            lng: floatt[1]
        }
        const nearestCities = searchFilter(newCoordinates, this.props.fullJson);
        this.setState({ nearestCities })

    }

    render() {

        return (
            <div>
                <div className="searchCity">
                    <Search
                        searchFunc={this.searchHandler} />

                    <div className="nearest-city-list">
                        <h3 className="list-header text-center nearest-header">Closest Cities</h3>
                        <div className="list-group nearest" id="list-tab" role="tablist">
                            {this.state.nearestCities.map(city =>
                                <li
                                    className="list-group-item list-group-item-action"
                                    key={city.city + city.county}>
                                    {city.city + "/" + city.county + "\n" + Math.round(city.distanceFromLoc * 100) + "\t KM"}
                                </li>
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className="map">
                    <h3 className="list-header text-center">MapView</h3>
                    <Map
                        nearestCitiesProp={this.state.nearestCities} />
                </div>
            </div>
        )
    }
}

export default Searcher