const About = () => (
    <div className="w-[100vw] h-[100vh] bg-[#1E1E1E] text-white">
        <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="modern uppercase tracking-widest text-md pb-2">à propos de nous</p>
            <div className="">
                <div className="w-[80vw] h-fit border border-solid border-white flex flex-col items-center justify-between text-center">
                    <h1 className="uppercase serif text-2xl sm:text-6xl pt-8">joel leventon</h1>
                    <p className="modern uppercase tracking-widest text-md sm:pb-10">courtier immobilier résidentiel</p>
                    <p className="serif italic p-10 text-lg sm:text-3xl">
                        Se spécialisant dans la vente de maisons historiques au Québec, il a intégré sa formation académique et professionnelle en histoire à une carrière dans l'immobilier.  Joel utilise ses compétences en recherche et en marketing pour mettre en valeur l'immobilier et sait raconter l'histoire unique d'une vieille maison. Il travaille avec d'autres professionnels pour optimiser ses services et est membre de l’Association professionnelle des courtiers immobiliers du Québec et de l’Association canadienne de l’immobilier. Il vit à Montréal et parcourt la belle province de Québec pour soutenir ceux qui cherchent à vendre ou à acheter une maison historique.
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default About;