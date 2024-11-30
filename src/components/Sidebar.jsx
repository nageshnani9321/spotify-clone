import React, { useState, useContext, useEffect, useRef } from "react";
import { PlayerContext } from "./PlayerContext";
import {
    FaHome,
    FaSearch,
    FaArrowRight,
    FaPlus,
    FaMusic,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { songsData } from "../assets/assets";
import { motion } from "framer-motion";  


const SongItem = ({ name, image, desc, id }) => {
    const { playWithId } = useContext(PlayerContext);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{
                opacity: 1,  
                x: 0,  
            }}
            viewport={{ once: false, amount: 0.5 }}  
            transition={{
                duration: 3,  
                ease: "easeOut",  
                delay: 0.1 * Math.random(),  
            }}
            onClick={() => playWithId(id)}
            className="min-w-[150px] flex items-center p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all"
        >
            <img className="rounded w-14" src={image} alt={name} />
            <div className="flex flex-col ml-3 max-w-[150px]">
                <p className="font-bold mb-1 truncate max-w-[150px]">{name}</p>
                <p className="text-slate-200 text-sm truncate max-w-[150px]">{desc}</p>
            </div>
        </motion.div>
    );
};

const Sidebar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const scrollRef = useRef(null); 

    const filteredSongs = songsData.filter((song) =>
        song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop += 1;
                if (scrollRef.current.scrollTop >= scrollRef.current.scrollHeight) {
                    scrollRef.current.scrollTop = 0;
                }
            }
        }, 100);  

        return () => clearInterval(scrollInterval); 
    }, []);

    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex overflow-hidden">
            {/* Sidebar Header */}
            <div className="bg-[#121212] rounded-lg p-4 shadow-lg">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 pl-4 cursor-pointer hover:bg-[#333] p-2 rounded-md transition-all duration-300"
                >
                    <FaHome className="w-6" />
                    <p className="font-bold">Home</p>
                </div>
                <motion.div
                    className="bg-[#121212] rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="flex items-center p-2 rounded-md bg-[#1f1f1f] transition-all duration-300 ease-in-out hover:bg-[#242424] focus-within:bg-[#2d2d2d]">
                        <FaSearch className="text-white w-6 transition-all duration-300 ease-in-out group-focus-within:text-[#656565]" />
                        <input
                            type="text"
                            placeholder="Search for songs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent text-white w-full ml-2 outline-none placeholder:text-gray-500 transition-all duration-300 ease-in-out rounded-md"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Songs List */}
            <div className="bg-[#121212] rounded-lg mt-1 shadow-lg h-full overflow-hidden">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <FaMusic className="w-8 h-8" />
                        <p className="font-semibold text-2xl">Songs List</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                        <FaArrowRight className="w-5" />
                        <FaPlus className="w-5" />
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 mt-4 p-4 flex-wrap">
                    <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>Playlist</p>
                    <p className='text-white px-4 py-1 rounded-2xl cursor-pointer bg-black hover:text-black hover:bg-white transition-transform transform hover:scale-100 duration-200'>Album</p>
                    <p className='text-white px-4 py-1 rounded-2xl cursor-pointer bg-black hover:text-black hover:bg-white transition-transform transform hover:scale-100 duration-200'>Artist</p>
                </div>

                {/* Song Items */}
                <div className="overflow-y-auto max-h-[400px] p-4" ref={scrollRef}>
                    <div className="flex flex-col space-y-2">
                        {filteredSongs.length > 0 ? (
                            filteredSongs.map((item, index) => (
                                <SongItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    desc={item.desc}
                                    image={item.image}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400">No songs found matching your search.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
