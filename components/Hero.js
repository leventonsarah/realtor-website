const Hero = () => {
    return (
        <div>
        <div className="sm:bg-[url('/images/hero-desktop.jpg')] bg-[url('/images/hero-mobile.jpg')] bg-cover bg-fixed w-[100%] h-[100%] m-[0px] p-[0px] overflow-x-hidden">
            <div className="w-full h-[100vh] flex flex-col justify-center items-center">
                <div className="flex flex-col items-center text-white pb-[5%]">
                    <p className="modern uppercase text-md tracking-widest">Courtier Immobilier Résidentiel</p>
                    <h1 className="serif uppercase text-5xl text-center">Joel Leventon</h1>
                    <hr className="w-[100px] text-white my-4"></hr>
                    <p className="modern w-[80%] text-center text-lg tracking-wide ">Courtage immobilier spécialisé en maisons historiques et en propriétés à l’internationale</p>
                </div>
                
                <div className="bottom-8 absolute z-10 text-white text-center">
                    <div className="animate-bounce">⬩</div>
                    <a href="tel:514-708-9291" className="modern uppercase tracking-widest link-underline pt-2">(514) 708-9291</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;