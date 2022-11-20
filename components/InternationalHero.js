import Navbar from "./Navbar";

const InternationalHero = () => {
    return (
        <>
            <Navbar linktoLeft={"/Historic"} linkLeft1={"maisons"} linkLeft2={"historiques"} linktoRight={"/"} linkRight1={"retour à"} linkRight2={"l'accueil"}/>
            <div className="sm:bg-[url('/images/international-desktop.jpg')] bg-[url('/images/international-mobile.jpg')] bg-cover bg-fixed w-[100vw] h-[100vh]">
                <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center text-white pb-[5%]">
                        <p className="modern uppercase text-md tracking-widest">à l'internationale</p>
                        <h1 className="serif uppercase text-5xl text-center">propriétés à vendre</h1>
                        <hr className="w-[100px] text-white my-4"></hr>
                        <p className="modern w-[80%] text-center text-lg tracking-wide">Découvrez des propriétés uniques et de qualité autour du globe</p>
                    </div>
                    
                    <div className="bottom-8 absolute text-white text-center">
                        <div className="animate-bounce">⬩</div>
                        <a href="tel:514-708-9291" className="modern uppercase tracking-widest link-underline pt-2">(514) 708-9291</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InternationalHero;