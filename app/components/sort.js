import { useContext, useState } from 'react';
import { DataWp } from './fetchWp';


export default function Sort() {

  const concertInfo = useContext(DataWp);

  const [filtered, setFiltered] = useState("unSorted");
  const [sortInfo, setSortInfo] = useState([...concertInfo]);

  function handleClick () {
    const sortedConcertInfo = [...concertInfo];
    if (filtered == "unSorted"
    ) {
      setSortInfo([...sortedConcertInfo].sort((a, b) => new Date(a.acf.horaires) - new Date(b.acf.horaires)));
      setFiltered("sorted");
    }else {
      setSortInfo([...sortedConcertInfo].sort((a, b) => new Date(b.acf.horaires) - new Date(a.acf.horaires)));
      setFiltered("unSorted");
    }
  };

  return(
    <button onClick={handleClick}>tri</button>
  );
};

