const Services = () => (
    <div className="w-[100vw] h-full bg-[#F3F1EC] text-[#1E1E1E]">
        <div className="w-[100%] h-[100%] flex flex-col">
            <div className="pl-[5vw] pt-[5vh] pb-[5vh]">
                <div className="flex items-center space-x-4">
                <div className="h-[0.5px] w-[40px] bg-[#1E1E1E]"></div>
                    <p className="uppercase modern text-md tracking-widest">maisons historiques</p>
                </div>
                <h1 className="serif uppercase text-4xl sm:text-6xl">nos services</h1>
            </div>
            <div className="px-[5vw] pb-[10vh]">
                <ul className="flex flex-col sm:flex-row sm:justfiy-between">
                    <div className="flex flex-col space-y-4">
                        <li className="flex flex-col text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Consultation</h1>
                            <p className="serif italic text-2xl">concernant les souhaits de vente et/ou d’achat d’une maison historique</p>
                        </li>
                        <li className="flex flex-col text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Estimation</h1>
                            <p className="serif italic text-2xl">de la valeur marchande de la propriété</p>
                        </li>
                        <li className="flex flex-col text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Préparation</h1>
                            <p className="serif italic text-2xl">de la mise en marché de la propriété</p>
                        </li>
                        <li className="flex flex-col text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Mise en marché</h1>
                            <p className="serif italic text-2xl">et affichage sur Centris.ca et Realtor.ca</p>
                        </li>
                    </div>
                    <div className="flex flex-col sm:justify-start sm:w-full sm:pt-0 sm:items-end sm:text-right space-y-4 pt-4">
                        <li className="flex flex-col sm:text-right text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Commercialisation</h1>
                            <p className="serif italic text-2xl"> moyennant un réseau international de courtiers immobiliers et des réseaux sociaux</p>
                        </li>
                        <li className="flex flex-col sm:text-right text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Préparation</h1>
                            <p className="serif italic text-2xl">et encadrement des visites</p>
                        </li>
                        <li className="flex flex-col sm:text-right text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Conseil</h1>
                            <p className="serif italic text-2xl">dans la démarche de réception d’offres et de négociations</p>
                        </li>
                        <li className="flex flex-col sm:text-right text-left h-full items-left">
                            <h1 className="serif uppercase text-3xl sm:text-4xl">Accompagnement</h1>
                            <p className="serif italic text-2xl"> jusqu’à la finalisation de la vente chez le notaire</p>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    
)

export default Services;