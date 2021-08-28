import React, { useEffect, useState } from 'react';

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    
    useEffect( () => {
        fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(
            (locationData) => {
                setLocations(locationData)
            }
    )},
    []
    )


    return(
        <>
            {locations.map((location) => {
                return <div key={`location--${location.id}`}>{location.name}, located at {location.address}</div>
            })}
        </>
    )
}