import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar linktoLeft={"/International"} linkLeft1={"propriétés à"} linkLeft2={"l'internationale"} linktoRight={"/Historic"} linkRight1={"maisons"} linkRight2={"historiques"}/>
      <Hero />
    </>
  )
}
