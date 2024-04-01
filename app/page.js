import { FetchConcertData } from "./components/fetchConcertWp";
import { SortData } from "./components/sortConcertData";
import { FetchMapData } from "./components/fetchMapWp";
import Header from "/app/components/header";
import LineUp from "/app/components/lineUp"
import Map from "./components/map";
import Welcome from "./components/welcome"
import Title from "./components/title";
import Billeterie from "./components/billeterie";
import Infos from "./components/infoPratiques";
import SocialMedia from "./components/socialMedia";

export default function Index() {
  return (
    <>
      <FetchConcertData>
        <Header />
        <Welcome />
        <Title title="Programmation" />
        <SortData>
          <LineUp />
        </SortData>
      </FetchConcertData>
      <Title title="Billeterie" />
      <Billeterie />
      <Title title="Informations" />
      <Infos />
      <Title title="Réseaux Sociaux" />
      <SocialMedia />
      <Title title="Nos Partenaires" />

      <FetchMapData>
        <Title title="Carte du Festival" />
        <Map />
      </FetchMapData>
    </>
  );
}
