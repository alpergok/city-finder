import React from 'react';
import '../app.css';

const Cities = (props) => {
    return (
        <div className="col">

            {props.cities.map((instantCity) => (
                <li className="list-group-item list-group-item-action"
                    key={instantCity.city + instantCity.county}
                    onClick={() => props.selectCity(instantCity)}
                >
                    {instantCity.city}
                </li>


            ))}


        </div>
    )
}


export default Cities

