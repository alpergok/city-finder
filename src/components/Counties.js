import React from 'react';

const Counties = (props) => {

    return (

        <div className="col">

            {props.counties.map((instantCounty) => (
                <p className="list-group-item list-group-item-action"
                    key={instantCounty.city + instantCounty.county}
                >
                    {instantCounty.county}
                </p>
            ))}


        </div>
    )
}

export default Counties;