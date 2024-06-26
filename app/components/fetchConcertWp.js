"use client"

import React, { createContext, useEffect, useState } from 'react';

// Permet le transfert des données aux autres composants
const DataConcertWp = createContext();

const FetchConcertData = ({ children }) => {
  const [concertData, setConcertData] = useState([]);
  useEffect(() => {
    async function loadConcertData() {
      const response = await fetch('http://localhost/zikos/wp-json/wp/v2/concert?per_page=25');
      if (!response.ok) {
        console.log("response not ok");
        return;
      }

      const concertData = await response.json();
      setConcertData(concertData);
      setConcertData([...concertData].sort((a, b) => new Date(a.acf.horaires) - new Date(b.acf.horaires)));
    }
    loadConcertData();
  }, []);


  return (
    <DataConcertWp.Provider value={concertData}>
      {children}
    </DataConcertWp.Provider>
  );
};
export { DataConcertWp, FetchConcertData };
