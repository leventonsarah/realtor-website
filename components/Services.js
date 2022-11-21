import ServicesSlider from "./ServicesSlider";
import { services } from "./ServicesData";

const Services = () => (
    <div className="w-[100vw] h-full bg-[#F3F1EC] text-[#1E1E1E]">
        <div className="w-[100%] h-[100%] flex flex-col">
            <div className="pl-[5vw] pb-[5vh]">
                <div className="flex items-center space-x-4">
                <div className="h-[0.5px] w-[40px] bg-[#1E1E1E]"></div>
                    <p className="uppercase modern text-md tracking-widest">maisons historiques</p>
                </div>
                <h1 className="serif uppercase text-4xl sm:text-6xl">nos services</h1>
            </div>
            <div className="px-[5vw] pb-[10vh]">
                <div className="bg-[#1E1E1E] flex flex-col sm:flex-row w-full h-[80vh] sm:h-[40vh] drop-shadow-lg">
                    <div className="w-full h-full flex justify-center items-center">
                        <ServicesSlider slides={services}/>
                    </div>
                    <div>
                        <img src="/images/services.jpg" className="w-full h-full object-cover"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)

export default Services;