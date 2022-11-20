import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Approach = () => (
    <div className="w-[100vw] h-[100vh] bg-[#F3F1EC] flex items-center justify-center">
        <div className="card lg:card-side shadow-xl w-[80%] h-[40vh] rounded-none">
            <figure className="h-[20vh] sm:h-[40vh] w-full"><img src="/images/approach.jpg" className="w-full h-[40vh]"/></figure>
            <div className="card-body bg-[#1E1E1E] p-8">
                <p className="serif italic text-2xl text-white text-center pb-8">Notre approche de mise en valeur des maisons historiques se concentre sur les trois groupes d'éléments suivants:</p>
               
                
            </div>
        </div>

    </div>
)

export default Approach;

