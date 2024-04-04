import { FetchConcertData } from "./components/fetchConcertWp";
import { SortData } from "./components/sortConcertData";
import { FetchMapData } from "./components/fetchMapWp";
import { FetchPartners } from "./components/fetchPartners";
import Header from "/app/components/header";
import LineUp from "/app/components/lineUp"
import Map from "./components/map";
import Welcome from "./components/welcome"
import Title from "./components/title";
import Billeterie from "./components/billeterie";
import Infos from "./components/infoPratiques";
import SocialMedia from "./components/socialMedia";
import Partners from "./components/partners";

export default function Index() {
  return (
    <>
      <FetchConcertData>
        <Header />
        <Welcome />
        <div id="prog"></div>
        <Title title="Programmation" />
        <SortData>
          <LineUp />
        </SortData>
      </FetchConcertData>
      <div id="billet"></div>
      <Title title="Billeterie" />
      <Billeterie />
      <div id="info"></div>
      <Title title="Informations" />
      <Infos />
      <div id="follow"></div>
      <Title title="Réseaux Sociaux" />
      <SocialMedia />
      <Title title="Nos Partenaires" />
      <FetchPartners>
        <Partners />
      </FetchPartners>
      <FetchMapData>
        <div id="map"></div>
        <Title title="Carte du Festival" />
        <Map />
      </FetchMapData>
    </>
  );
}
