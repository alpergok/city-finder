import React from 'react';


const Search = (props) => {

    const [coord, setCoord] = React.useState()

    return (
        <div>

            <h1 style={{ 'color': "white" }}>Find the closest cities to a specific location.</h1>
            <div className="buttonInput">
                <input
                    style={{ 'textAlign': "center" }}
                    className="coordinateInput"
                    type="text"
                    placeholder="Latitude Longitude"
                    onChange={(e) => setCoord(e.target.value)} />
                <button 
                className="searchButton" 
                type="button"
                onClick={() => props.searchFunc(coord)}>Find the cities</button>
            </div>
        </div>
    )
}
export default Search