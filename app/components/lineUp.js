"use client"

import { useContext } from 'react';
import { DataWp } from './fetchWp';
import ShowInfo from './showInfo';
import Sort from './sort';

export default function LineUp() {

  const concertInfo = useContext(DataWp);

  if (!concertInfo) {
    return <div>Loading...</div>;
  };
  return (

    <ul className="flex flex-col h-80 overflow-y-scroll bg-slate-300">
      <Sort />
      {concertInfo.map((post, index) => (
        <ShowInfo
          key={index}
          group={post.acf.groupe}
          spot={post.acf.spot}
          time={post.acf.horaires}
        />
      ))}
    </ul>
  );
};