import React, { useState } from "react";
import Link from "next/link";

const MenuIcon = () => {
    return(
        <div className="absolute top-0 right-0 px-8 py-9 space-y-2 cursor-pointer">
            <span className="block h-[1px] w-6 bg-white"></span>
            <span className="block h-[1px] w-6 bg-white"></span>
            <span className="block h-[1px] w-6 bg-white"></span>
      </div>
    );
}

const CrossIcon = () => {
    return(
        <div className="absolute top-0 right-0 px-8 py-7 cursor-pointer">
            <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
      </div>
    );
}

const Navbar = ({ linktoLeft, linktoRight, linkLeft1, linkLeft2, linkRight1, linkRight2}) => {
    const [ nav, setNav ] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="w-full h-[13vh] absolute z-10 m-0 p-0">
            <div className="absolute z-0 text-left pl-8 sm:left-0 sm:text-center w-full text-white overflow-x-hidden">
                <p className="uppercase logo pt-7 text-4xl tracking-wider">JL</p>
            </div>
            <div className="flex justify-between p-8 tracking-wide text-white z-10 overflow-x-hidden"> 
                <div className="sm:flex space-x-8 hidden z-10 link-underline leading-tight"> 
                    <Link href={linktoLeft} className="modern uppercase cursor-pointer text-left">{linkLeft1}<br /><span className="font-light">{linkLeft2}</span></Link>
                </div>
                <div className="sm:flex space-x-8 hidden z-10 link-underline leading-tight"> 
                    <Link href={linktoRight} className="modern uppercase cursor-pointer text-right">{linkRight1}<br /><span className="font-light">{linkRight2}</span></Link>
                </div>  
            </div>
            <div className="block sm:hidden" onClick={handleNav}>
                { nav ? (
                        <CrossIcon />
                    ) : (
                        <MenuIcon /> 
                    )}
            </div>
            <div className={ nav ? 
                "z-40 absolute h-[100vh] w-[100%] top-0 left-0 right-0 bottom-0 opacity-1 bg-black/90 duration-500 ease-in-out overflow-hidden m-0 p-0"
                 : "-z-10 absolute h-[100vh] w-[100%] top-0 left-0 right-0 bottom-0 opacity-0 bg-black/90 duration-500 ease-in-out overflow-hidden m-0 p-0"} >
                <div onClick={handleNav}>
                    <CrossIcon />
                </div>
                <ul className="space-y-10 uppercase text-white text-2xl flex flex-col items-start pl-[40px] mt-[10vh] overflow-x-hidden">
                    <li onClick={handleNav} className="serif text-4xl">
                        <Link href="/">accueil</Link>
                    </li>
                    <li onClick={handleNav} className="modern">
                        <Link href="/International">propriétés à<br /><span className="font-light">l'internationale</span></Link>
                    </li>
                    <li onClick={handleNav} className="modern">
                    <Link href="/Historic" className="modern uppercase cursor-pointer text-right">maisons<br /><span className="font-light">historiques</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;

