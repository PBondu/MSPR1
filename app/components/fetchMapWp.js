"use client"

import React, { createContext, useEffect, useState } from 'react';

// Permet le transfert des données aux autres composants
const DataMapWp = createContext();

const FetchMapData = ({ children }) => {
  const [mapData, setMapData] = useState([]);
  useEffect(() => {
    async function loadMapData() {
      const response = await fetch('http://localhost/zikos/wp-json/wp/v2/map');
      if (!response.ok) {
        console.log("response not ok");
        return;
      }

      const mapData = await response.json();
      setMapData(mapData);
    }
    loadMapData();
  }, []);


  return (
    <DataMapWp.Provider value={mapData}>
      {children}
    </DataMapWp.Provider>
  );
};
export { DataMapWp, FetchMapData };