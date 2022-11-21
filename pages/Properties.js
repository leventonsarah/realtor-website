import PropertyBox from "../components/PropertyBox";
import { properties } from '../data';

export const getStaticProps = async () => {
    return {
      props: {
        PropertiesLists: properties,
      },
    }
  }

const Properties = ({PropertiesLists}) => {
    return (
        <div className="bg-[#F3F1EC] w-full h-full pb-[5vh]">
            <div className="pl-[5vw] pt-[5vh]">
                <div className="flex items-center space-x-4">
                    <div className="h-[0.5px] w-[40px] bg-[#1E1E1E]"></div>
                    <p className="uppercase modern text-md tracking-widest">à l'internationale</p>
                </div>
                <h1 className="serif uppercase text-4xl sm:text-6xl">propriétés à vendre</h1>
            </div>
            <div className="flex flex-wrap justify-center">
            {PropertiesLists.map(PropertiesList => (
                    <PropertyBox key={PropertiesList.id} {...PropertiesList}></PropertyBox>
                  ))}
            </div>
        </div>
    );
}

export default Properties;