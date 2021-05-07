import React from 'react';
import Cities from './Cities';
import Counties from './Counties';
import Searcher from './Searcher';
import axios from 'axios';
import '../app.css';
import logo from '../img/logo.png';

class App extends React.Component {

    state = {
        cities: [],
        counties: [],
        selectedCounties: []
    }

    cityHandler = (city) => {

        const newCounties = this.state.counties.filter(
            c => c.city === city.city
        );

        this.setState(state => (
            { selectedCounties: newCounties }
        ))

    }

    async componentDidMount() {

        const baseURL1 = "http://localhost:3002/cities";
        const response1 = await axios.get(baseURL1);
        this.setState({ cities: response1.data });


        const baseURL2 = "http://localhost:3002/counties";
        const response2 = await axios.get(baseURL2);

        this.setState({ counties: response2.data });
    }

    render() {

        return (
            <div className="app">

                <section id="top-container" className="text-center">
                    <img className="logo" src={logo} alt="CityFinder" />
                    <p className="alt-text">Find the cities and counties of Turkey.</p>

                    <div className="city-list">
                        <h3 className="list-header">Cities</h3>
                        <div className="list-group" id="list-tab" role="tablist">
                            <Cities
                                cities={this.state.cities}
                                selectCity={this.cityHandler}
                            />
                        </div>
                    </div>

                    <div className="county-list">
                        <h3 className="list-header">Counties</h3>
                        <div className="list-group" id="list-tab" role="tablist">
                            <Counties
                                counties={this.state.selectedCounties}
                            />
                        </div>
                    </div>
                </section>

                <section id="map-container">
                    <Searcher
                        fullJson={this.state.cities.concat(this.state.counties)} />
                </section>
            </div>
        )

    }
}
export default App


