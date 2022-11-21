import { properties } from '../../data';
import Slider from '../../components/Slider';
import Promo from '../../components/Promo';
import Footer from '../../components/Footer';

export const getStaticProps = async ({ params }) => {
    const PropertiesList = properties.filter((p) => p.id.toString() === params.id);
    return {
        props: {
            property: PropertiesList[0],
        },
    };
};

export const getStaticPaths = async () => {
    const paths = properties.map((property) => ({
      params: { id: property.id.toString() },
    }));
  
    return { paths, fallback: false };
  };

const Id = ({ property }) => (
       <div>
        <div className="w-[100vw] sm:h-[100vh] h-[60vh]">
            <Slider slides={property.slides} />
        </div>
        <div className="bg-[#F3F1EC] text-[#1E1E1E]">
            <div className="pl-[5vw] pt-[5vh] pb-[5vh]">
                <div className="flex items-center space-x-4">
                    <div className="h-[0.5px] w-[40px] bg-[#1E1E1E]"></div>
                    <p className="uppercase modern text-md tracking-widest">propriété</p>
                </div>
                <h1 className="serif uppercase text-3xl sm:text-6xl pr-4">{property.title}</h1>
                <p className="modern text-2xl">{property.price}</p>
                <p className='serif italic text-xl'>*Le prix pourrait être ajusté en fonction du changement du taux d'échange.</p>
            </div>
            <div className='w-[100vw] flex flex-col sm:flex-row pt-10 px-[5vw] sm:space-x-[5vw] items-start justify-center space-y-20 sm:space-y-0 pb-[5vh]'>
                <div className='w-[95%] sm:w-[50%] space-y-2'>
                    <p className='uppercase modern tracking-widest'>détails</p>
                    <div className='w-[100%] bg-[#1E1E1E] h-[0.5px]'></div>
                    <div className='flex flex-col items-center w-[100%]'>
                        <div className='flex justify-between w-[100%]'>
                            <p className='serif uppercase text-3xl'>terrain</p>
                            <p className='modern text-2xl'>{property.landSize}</p>
                        </div>
                        <div className='flex justify-between w-[100%]'>
                            <p className='serif uppercase text-3xl'>maison</p>
                            <p className='modern text-2xl'>{property.houseSize}</p>
                        </div>
                        <div className='flex justify-between w-[100%]'>
                            <p className='serif uppercase text-3xl'>frais mensuels</p>
                            <p className='modern text-2xl'>{property.HOA}</p>
                        </div>
                        <div className='flex justify-between w-[100%]'>
                            <p className='serif uppercase text-3xl'>statut</p>
                            <p className='modern text-2xl uppercase'>{property.status}</p>
                        </div>
                    </div>
                </div>
                <div className='w-[95%] sm:w-[50%] space-y-2'>
                    <p className='uppercase modern tracking-widest text-right'>caractéristiques</p>
                    <div className='w-[100%] bg-[#1E1E1E] h-[0.5px]'></div>
                    <div className='flex flex-col items-center w-[100%]'>
                        <div className='flex justify-between w-[100%]'>
                            <p className='serif uppercase text-3xl'>chambres</p>
                            <p className='modern text-3xl'>{property.rooms}</p>
                        </div>
                        <div className='flex justify-between w-[100%]'>
                            <p className='serif uppercase text-3xl'>salles de bain</p>
                            <p className='modern text-3xl'>{property.bathrooms}</p>
                        </div>
                        <div className='flex justify-between w-[100%]'>
                            <p className='serif uppercase text-3xl'>parking</p>
                            <p className='modern text-3xl'>{property.parking}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100vw] flex flex-col sm:flex-row pt-10 px-[5vw] justify-center items-center pb-[10vh]'>
                <div className='sm:w-[50%]'>
                    <img src={property.descImg} className="w-full h-[100%] object-cover shadow-md" />
                </div>
                <div className='sm:w-[50%] bg-[#1E1E1E]'>
                    <p className='p-8 serif italic sm:text-2xl text-xl text-white'>
                        {property.description}
                    </p>
                </div>
            </div>
            
        </div>
        <Promo />
        <Footer />
        </div>
        
)

export default Id;