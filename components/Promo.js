const Promo = () => {
    return (
        <div className="w-[100vw] h-[60vh] bg-[url('/images/promo.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="w-[100%] h-[100%] flex flex-col items-center justify-center text-white">
                <p className="modern uppercase tracking-widest text-xl pb-2">vendez/achetez avec nous</p>
                <div className="border border-solid border-white w-[80%] text-center flex flex-col justify-center items-center">
                    <h1 className="uppercase serif text-4xl sm:text-6xl pt-8">joel leventon</h1>
                    <p className="uppercase modern text-lg sm:text-xl tracking-widest pb-8">courtier immobilier résidentiel</p>
                    <a href="mailto:joel.leventon@hotmail.com" className="w-fit serif italic text-2xl sm:text-4xl link-underline">joel.leventon@outlook.com</a>
                    <a href="tel:514-708-9291" className="w-fit serif italic link-underline pt-2 text-2xl sm:text-4xl mb-8">+1 (514) 708-9291</a>
                </div>
            </div>
        </div>
    );
}

export default Promo;