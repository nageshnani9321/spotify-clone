import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { PlayerContext } from './PlayerContext';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const { songsData, playWithId } = useContext(PlayerContext);

    // Filter songs based on search query
    const filteredSongs = songsData.filter(song => 
        song.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-3 bg-[#121212] text-white rounded-2xl">
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <MdArrowBack onClick={() => navigate(-1)} className='w-8 h-8 text-black p-2 rounded-2xl cursor-pointer bg-white hover:text-white hover:bg-black transition-transform transform hover:scale-100 duration-200' />
                    <MdArrowForward onClick={() => navigate(1)} className='w-8 h-8 text-black p-2 rounded-2xl cursor-pointer bg-white hover:text-white hover:bg-black transition-transform transform hover:scale-100 duration-200' />
                </div>
                <div className="flex items-center gap-4">
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>N</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mt-4 w-[100%]  flex items-center p-2 rounded-md bg-[#1f1f1f] transition-all duration-300 ease-in-out hover:bg-[#242424] focus-within:bg-[#2d2d2d]">
            <FaSearch className="text-white w-6 transition-all duration-300 ease-in-out group-focus-within:text-[#656565]" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search songs..."
                    className="p-3 w-full rounded-lg bg-[#2a2a2a] text-white border-2 border-[#272727] focus:outline-none focus:border-green-900"
                />
            </div>

            {/* Displaying filtered songs */}
            {searchQuery && (
                <motion.div 
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {filteredSongs.map((song) => (
                        <motion.div
                            key={song.id}
                            onClick={() => playWithId(song.id)}
                            className="cursor-pointer bg-[#1f1f1f] hover:bg-[#333333] transition-all duration-300 rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Song Image Section */}
                            <motion.div
                                className="overflow-hidden relative rounded-md mb-3"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={song.image}
                                    alt={song.name}
                                    className="w-full h-40 object-cover rounded"
                                />
                            </motion.div>

                            {/* Song Text Section */}
                            <div className="text-center">
                                <p className="text-lg text-white font-semibold truncate">{song.name}</p>
                                <p className="text-sm text-gray-400 mt-1 truncate">{song.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;

