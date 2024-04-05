"use client"

import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip, Circle } from 'react-leaflet'
import { Icon, map } from 'leaflet'
import { DataMapWp } from './fetchMapWp';
import MapFilterButton from './mapFilterButton';
import Image from 'next/image';



export default function Map() {

  const mapInfo = useContext(DataMapWp);

  const polyline = [
    [48.83965312578284, 2.3790550231933594],
    [48.83502064451891, 2.3846769332885747],
    [48.83390483044093, 2.3826384544372563],
    [48.83860803023782, 2.3764801025390625],
    [48.83965312578284, 2.3790550231933594]
  ]
  const [sortedMapData, setSortedMapData] = useState([]);

  useEffect(() => {
    setSortedMapData([...mapInfo]);
  }, [mapInfo]);

  function handleClickFilterByPing(ping) {
    const mapInfoToFilter = [...mapInfo];
    var mapInfoFiltered = [];
    mapInfoToFilter.filter(object => object.acf.type.includes(ping)).map(filteredSpot => (
      mapInfoFiltered.push(filteredSpot)
    ));
    setSortedMapData(mapInfoFiltered)
  };

  const [classMap, setClassMap] = useState("h-72 z-10")
  const [key, setKey] = useState(0); // ajoute une clef unique pour forcer react à reload le composant map

  // fonction qui met la map en full screen
  function fullScreenMap() {
    const newClassMap = classMap === "h-72 z-10" ? "h-screen z-10" : "h-72 z-10";
    setClassMap(newClassMap);
    setKey(prevKey => prevKey + 1); // Met à jour la clé pour forcer le reload
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#febd02] h-40">
        <h3 className="text-[#e72a1c] text-xl h-1/4 pt-2">Filtres de la carte</h3>
        <div className="flex flex-row justify-around items-center w-full h-1/2 ">
          <MapFilterButton onClick={() => { handleClickFilterByPing("Scène") }} name="Scène" ping="./location-dot-solid-bleu.svg" />
          <MapFilterButton onClick={() => { handleClickFilterByPing("Shop") }} name="Shop" ping="./location-dot-solid-orange.svg" />
          <MapFilterButton onClick={() => { handleClickFilterByPing("Toilette") }} name="Toilette" ping="./location-dot-solid-jaune.svg" />
        </div>
        <button className="flex flex-row justify-center bg-slate-700 w-fit h-10 px-3 mb-4 text-m text-white items-center rounded-xl" onClick={() => { setSortedMapData(mapInfo) }}>Effacer Filtres</button>
      </div>

      <div className='relative'>
        {/* Bouton du full screen */}
        <a className="absolute top-0 right-0 z-50 bg-slate-700 p-2 w-fit h-fit mr-2 mt-2 rounded-xl" href="#leaflet-container" onClick={fullScreenMap}><Image src="./expand-solid.svg" width={20} height={20} /></a>
        {/* début de la map */}
        <MapContainer key={key} id='leaflet-container' className={classMap} center={[48.83658898990498, 2.38145401832107]} zoom={15} scrollWheelZoom={false}>
          {console.log(classMap)}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Polyline positions={polyline} pathOptions={{ color: "red" }} />

          <Circle center={[48.838678645488564, 2.3801171779632573]} pathOptions={{ color: "Blue" }} radius={25}>
            <Tooltip direction="top" offset={[0, -20]} opacity={0.8} permanent>
              Entrée du festival
            </Tooltip>
          </Circle>

          {sortedMapData.map((marker) => (

            marker.acf.type === "Scène" ? (
              <Marker key={marker.id} position={[marker.acf.latitude, marker.acf.longitude]} icon={new Icon({ iconUrl: "./location-dot-solid-bleu.svg", iconSize: [18, 30], iconAnchor: [10, 30] })}>
                <Popup >
                  {marker.acf.name}
                </Popup>
              </Marker>)
              : marker.acf.type === "Shop" ? (
                <Marker key={marker.id} position={[marker.acf.latitude, marker.acf.longitude]} icon={new Icon({ iconUrl: "./location-dot-solid-orange.svg", iconSize: [18, 30], iconAnchor: [10, 30] })}>
                  <Popup >
                    {marker.acf.name}
                  </Popup>
                </Marker>)
                : marker.acf.type === "Toilette" ? (
                  <Marker key={marker.id} position={[marker.acf.latitude, marker.acf.longitude]} icon={new Icon({ iconUrl: "./location-dot-solid-jaune.svg", iconSize: [18, 30], iconAnchor: [10, 30] })}>
                    <Popup >
                      {marker.acf.name}
                    </Popup>
                  </Marker>)
                  : null
          ))};

        </MapContainer>
        {/* fin de la map */}
      </div>
    </>
  )
}