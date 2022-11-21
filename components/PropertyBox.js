import NextLink from 'next/link';

const PropertyBox = ({ id, image, city, title, price, rooms, bathrooms, size }) => {
    return (
        <div>
            <div className="sm:w-[90%] w-full h-fit p-4">
                <NextLink href={`/properties/[id]`} as={`/properties/${id}`} passHref>
                    <img src={image} alt="house" className="w-full h-full"/>
                    <div className="space-y-2">
                        <div className="flex justify-between uppercase modern pt-4 text-xl">
                            <p>{city}</p>
                            <p>{price}</p>
                        </div>
                        <h2 className="serif text-4xl">{title}</h2>
                        <p className="modern text-xl">{rooms} CAC | {bathrooms} SDB | {size}</p>
                        <p className="serif italic text-lg">*Le prix pourrait être ajusté en fonction du changement du taux d'échange.</p>
                        <div className="flex"> 
                            <NextLink href={`/properties/[id]`} as={`/properties/${id}`} passHref className="modern uppercase cursor-pointer text-right link-underline-black">détails</NextLink>
                        </div>  
                    </div>
                </NextLink>
            </div>
        </div>
    );
}

export default PropertyBox;