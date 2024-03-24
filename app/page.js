import { FetchData } from "./components/fetchWp";

import Header from "/app/components/header";
import LineUp from "/app/components/lineUp"

export default function Index() {
  return (
    <FetchData>
      <Header />
      <LineUp />
    </FetchData>
  );
}
