import Navbar from "./Navbar";

const HistoricHero = () => {
    return (
        <>
            <Navbar linktoLeft={"/International"} linkLeft1={"propriétés à"} linkLeft2={"l'internationale"} linktoRight={"/"} linkRight1={"retour à"} linkRight2={"l'accueil"}/>
            <div className="sm:bg-[url('/images/historic-desktop.jpg')] bg-[url('/images/historic-mobile.jpg')] bg-cover bg-no-repeat bg-fixed w-[100vw] h-[100vh]">
                <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center text-white pb-[5%]">
                        <p className="modern uppercase text-md tracking-widest">mettons en valeur les</p>
                        <h1 className="serif uppercase text-5xl text-center">maisons historiques</h1>
                        <hr className="w-[100px] text-white my-4"></hr>
                        <p className="modern w-[80%] text-center text-lg tracking-wide">Découvrez comment nous rendons leur due valeur aux maisons historiques</p>
                    </div>
                    
                    <div className="bottom-8 absolute z-10 text-white text-center">
                        <div className="animate-bounce">⬩</div>
                        <a href="tel:514-708-9291" className="modern uppercase tracking-widest link-underline pt-2">(514) 708-9291</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HistoricHero;