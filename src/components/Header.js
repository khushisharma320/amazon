import React from 'react';
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {

    const [nav, setNav] = useState(false);

    return (
        <div>
            <header className="shadow-sm shadow-slate-800 w-full h-20">
                <div className="flex justify-between pt-6 px-20">
                    <h4 className="text-2xl text-yellow-800 font-extrabold">E commerce</h4>
                    <ul className="hidden md:flex gap-6 pt-1">


                        <li className="hover:text-purple-800 hover:font-semibold text-lg text-yellow-950"><Link to="/">Home</Link></li>
                        <li className="hover:text-purple-800 hover:font-semibold text-lg text-yellow-950" style={{marginLeft: "5px"}}><Link to="/cart">Cart </Link><span className="bg-green-950 text-white px-2 rounded-full" >{cart.length}</span></li>
                        <li className="hover:text-purple-800 hover:font-semibold text-lg text-yellow-950"><span>contact</span></li>

                    </ul>

                    <div onClick={() => setNav(!nav)} className="md:hidden z-20">
                        {nav ? <MdOutlinePlaylistRemove size={30} /> : <IoMdMenu size={30} />}</div>

                    {
                        nav &&
                        <ul className="w-full h-full absolute top-0 left-0 bg-white text-center pt-40">
                            <li className="hover:text-purple-800 hover:font-semibold mb-10 text-lg text-yellow-950"><Link to="/">Home</Link></li>
                            <li className="hover:text-purple-800 hover:font-semibold ml-60 mb-10 text-lg text-yellow-950"><Link to="/cart">Cart</Link><span className="bg-green-950 text-white px-2 rounded-full">{cart.length}</span></li>
                            <li className="hover:text-purple-800 hover:font-semibold mb-10 text-lg text-yellow-950"><span>contact</span></li>
                        </ul>
                    }
                </div>
            </header >
        </div >
    )
}

export default Header;
