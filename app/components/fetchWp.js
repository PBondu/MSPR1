"use client"

import React, { createContext, useEffect, useState } from 'react';

// Permet le transfert des données aux autres composants
const DataWp = createContext();

const FetchData = ({ children }) => {
  const [concertData, setConcertData] = useState([]);
  useEffect(() => {
    async function loadConcertData() {
      const response = await fetch('http://localhost/zikos/wp-json/wp/v2/concert');
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const concertData = await response.json();
      setConcertData(concertData);
      setConcertData([...concertData].sort((a, b) => new Date(a.acf.horaires) - new Date(b.acf.horaires)));
    }
    loadConcertData();
  }, []);


  return (
    <DataWp.Provider value={concertData}>
      {children}
    </DataWp.Provider>
  );
};
export { DataWp, FetchData };