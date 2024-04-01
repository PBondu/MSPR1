"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { DataConcertWp } from './fetchConcertWp';
import DropDown from './dropDown';
import FilterList from './filterList';

const SortedInfo = createContext();

function SortData({ children }) {

  const concertInfo = useContext(DataConcertWp);

  const [sortInfo, setSortInfo] = useState([]);

  useEffect(() => {
    setSortInfo([...concertInfo]);
  }, [concertInfo]);


  const [sortDate, setSortDate] = useState("sortedByDate");
  function handleClickSortByDate() {
    const concertInfoToSort = [...sortInfo]
    if (sortDate === "unSortedByDate"
    ) {
      setSortInfo([...concertInfoToSort].sort((a, b) => new Date(a.acf.horaires) - new Date(b.acf.horaires)));
      setSortDate("sortedByDate");
    } else {
      setSortInfo([...concertInfoToSort].sort((a, b) => new Date(b.acf.horaires) - new Date(a.acf.horaires)));
      setSortDate("unSortedByDate");
    }
    setSortGroup("unSortedByGroup");
    setSortSpot("unSortedBySpot");
  };

  const [sortGroup, setSortGroup] = useState("unSortedByGroup");
  function handleClickSortByGroup() {
    const concertInfoToSort = [...sortInfo];
    if (sortGroup === "unSortedByGroup"
    ) {
      setSortInfo([...concertInfoToSort].sort((a, b) => a.acf.groupe.localeCompare(b.acf.groupe)));
      setSortGroup("sortedByGroup");
    } else {
      setSortInfo([...concertInfoToSort].sort((a, b) => a.acf.groupe.localeCompare(b.acf.groupe)).reverse());
      setSortGroup("unSortedByGroup");
    }
    setSortDate("unSortedByDate");
    setSortSpot("unSortedBySpot");
  };

  const [sortSpot, setSortSpot] = useState("unSortedBySpot");
  function handleClickSortBySpot() {
    const concertInfoToSort = [...sortInfo];
    if (sortSpot === "unSortedBySpot") {
      setSortInfo([...concertInfoToSort].sort((a, b) => {
        if (a.acf.spot === b.acf.spot) {
          return a.acf.horaires.localeCompare(b.acf.horaires);
        } else {
          return a.acf.spot.localeCompare(b.acf.spot);
        }
      }));
      setSortSpot("sortedBySpot");
    } else {
      setSortInfo([...concertInfoToSort].sort((a, b) => {
        if (a.acf.spot === b.acf.spot) {
          return a.acf.horaires.localeCompare(b.acf.horaires);
        } else {
          return b.acf.spot.localeCompare(a.acf.spot);
        }
      }));
      setSortSpot("unSortedBySpot");
    }
    setSortGroup("unSortedByGroup");
    setSortDate("unSortedByDate");
  };

  // Permet l'affichage des groupe dans l'ordre alphabétique au niveau du Filtre
  const concertInfoSortedByGroup = [...concertInfo].sort((a, b) => a.acf.groupe.localeCompare(b.acf.groupe));
  //const concertInfoSortedByGroupUniqueValue = getUniqueValues(concertInfoSortedByGroup, 'acf.spot');

  function handleClickFilterByGroup(group) {
    const concertInfoToFilter = [...concertInfo];
    var concertInfoFiltered = [];
    concertInfoToFilter.filter(object => object.acf.groupe.includes(group)).map(filteredName => (
      concertInfoFiltered.push(filteredName)
    ));
    setSortInfo(concertInfoFiltered)
  };

  function handleClickFilterByDate(date) {
    const concertInfoToFilter = [...concertInfo];
    var concertInfoFiltered = [];
    concertInfoToFilter.filter(object => object.acf.horaires.includes(date)).map(filteredDate => (
      concertInfoFiltered.push(filteredDate)
    ));
    setSortInfo(concertInfoFiltered)
  };

  function handleClickFilterBySpot(spot) {
    const concertInfoToFilter = [...concertInfo];
    var concertInfoFiltered = [];
    concertInfoToFilter.filter(object => object.acf.spot.includes(spot)).map(filteredSpot => (
      concertInfoFiltered.push(filteredSpot)
    ));
    setSortInfo(concertInfoFiltered)
  };

  return (
    <>
      <div className="flex justify-around items-center bg-[#febd02] min-h-16 text-[#e72a1c] text-xl py-2">
        <DropDown button="Filtrer">
          <div className="mt-2">
            <DropDown button="Date +">
              <select>
                <option onClick={() => { handleClickFilterByDate("2024-03-21") }}>Premier jour</option>
                <option onClick={() => { handleClickFilterByDate("2024-03-22") }}>Deuxième jour</option>
              </select>
            </DropDown>

            <DropDown button="Emplacement +">
              <div className="flex flex-col">
                {concertInfoSortedByGroup.map((post, index) => (
                  index === 0 || post.acf.spot !== concertInfoSortedByGroup[index - 1].acf.spot ? (
                    <FilterList
                      onClick={() => handleClickFilterBySpot(post.acf.spot)}
                      source={post.acf.spot}
                      key={index}
                    />
                  ) : null
                ))}
              </div>
            </DropDown>

            <DropDown button="Groupe +">
              <div className="flex flex-col">
                {concertInfoSortedByGroup.map((post, index) => (
                  <FilterList onClick={() => handleClickFilterByGroup(post.acf.groupe)} source={post.acf.groupe} key={index} />
                ))}
              </div>
            </DropDown>

            <button className="text-left mt-2 w-full" onClick={() => { setSortInfo(concertInfo) }}>Effacer Filtres</button>
          </div>
        </DropDown>
        <DropDown button="Trier">
          <div className="flex flex-col items-end mt-2">
            <button className="mt-2" onClick={handleClickSortByDate}>Date</button>
            <button className="mt-2" onClick={handleClickSortByGroup}>Groupe</button>
            <button className="mt-2" onClick={handleClickSortBySpot}>Emplacement</button>
          </div>
        </DropDown>
      </div>
      <SortedInfo.Provider value={sortInfo}>
        {children}
      </SortedInfo.Provider>
    </>
  );
};

export { SortedInfo, SortData }