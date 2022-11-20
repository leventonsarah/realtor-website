import InternationalHero from "../components/InternationalHero";
import { properties } from "../data";
import Properties from "./Properties";

export default function Historic() {
    return (
      <>
        <InternationalHero />
        <Properties PropertiesLists={properties} />
      </>
    )
  }
  