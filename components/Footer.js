import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-[100vw] h-fit bg-[#F3F1EC]">
            <div className="w-[100%] h-[100%]">
                <div className="flex w-[100%] justify-center items-center text-center pb-[2vh] pt-[5vh] px-[5vw]">
                    <div className="h-[1px] w-full bg-[#1E1E1E]"></div>
                    <p className="uppercase logo text-4xl tracking-wider w-fit px-10">JL</p>
                    <div className="h-[1px] w-full bg-[#1E1E1E]"></div>
                </div>
                <div className="w-[100%] h-[100%] flex flex-col sm:flex-row justify-between">
                    <div className="px-[5vw] z-10">
                        <ul className="space-y-4 uppercase text-[#1E1E1E] text-2xl flex flex-col justify-center text-center sm:text-left">
                            <li className="serif text-4xl">navigation</li>
                            <li className="modern">
                                <Link href="/" className="link-underline-black">accueil</Link>
                            </li>
                            <li className="modern">
                                <Link href="/International">propriétés à<br /><span className="font-light link-underline-black">l'internationale</span></Link>
                            </li>
                            <li className="modern">
                                <Link href="/Historic" className="modern uppercase cursor-pointer text-right">maisons<br /><span className="font-light link-underline-black">historiques</span></Link>
                            </li>
                         </ul>
                    </div>
                    <div className="sm:absolute sm:w-[100%] flex flex-col justify-center items-center space-y-4 pt-10 sm:pt-0">
                        <div className="h-[60px] w-[1px] bg-[#1E1E1E]"></div>
                        <a href="https://www.facebook.com/leventon.joel/" target="_blank"> 
                            <img src="/images/icons/fb-icon.png" className="w-[50px]"/>
                        </a>
                        <a href="https://twitter.com/GroundHomes" target="_blank"> 
                            <img src="/images/icons/twitter-icon.png" className="w-[50px]"/>
                        </a>
                    </div>
                    <div className="px-[5vw] z-10">
                        <ul className="space-y-4 uppercase text-[#1E1E1E] text-2xl flex flex-col justify-center text-center sm:text-right pt-10 sm:pt-0 ">
                            <li className="serif text-4xl">nous joindre</li>
                            <li className="modern">
                                <a href="mailto:joel.leventon@hotmail.com" className="link-underline-black">joel.leventon@outloook.com</a>
                            </li>
                            <li className="modern">
                                <a href="tel:514-708-9291" className="link-underline-black">(514) 708-9291</a>
                            </li>
                            <li className="w-[100%] flex justify-center sm:justify-end items-center space-x-4">
                            <a href="https://www.realtor.ca/courtier-immobilier/2090924/joel-leventon-2282-rue-goyer--montr%C3%A9al-qu%C3%A9bec-h3s1g9#office=leventon&page=1&sort=11-A" target="_blank"> 
                                <img src="/images/icons/realtor-icon.png" className="w-[48px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/joel-leventon-71441222b/?original_referer=" target="_blank"> 
                                <img src="/images/icons/linkedin-icon.png" className="w-[60px]"/>
                            </a>
                            </li>
                         </ul>
                    </div>
                </div>
            
                <div className="px-[5vw] py-8">
                    <div className="h-[1px] w-full bg-[#1E1E1E]/20"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between justify-center text-center pt-2">
                        <p className="serif italic text-[#1E1E1E]/70">© Joel Leventon | Tous Droits Réservés</p>
                        <p className="serif italic text-[#1E1E1E]/70">Conception web par Sarah Leventon</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;