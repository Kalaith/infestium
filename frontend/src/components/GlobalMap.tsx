import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const GlobalMap: React.FC = () => {

    useEffect(() => {
        const fetchData = async () => {

        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Global Map</h2>
            <ComposableMap>
                <Geographies geography="/path/to/world-geojson">
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default GlobalMap;