import InternationalHero from "../components/InternationalHero";
import { properties } from "../data";
import Properties from "./Properties";
import Promo from "../components/Promo";
import Footer from "../components/Footer";

export default function Historic() {
    return (
      <>
        <InternationalHero />
        <Properties PropertiesLists={properties} />
        <Promo />
        <Footer />
      </>
    )
  }
  