import React, { useContext } from 'react';
import { motion } from 'framer-motion'; 
import { PlayerContext } from './PlayerContext';

const SongItem = ({ name, image, desc, id }) => {
    const { playWithId } = useContext(PlayerContext);

    return (
        <motion.div
            onClick={() => playWithId(id)} 
            className="min-w-[180px] p-4 px-5 rounded-lg cursor-pointer bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-all duration-300 shadow-md hover:shadow-xl" 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            whileTap={{
                scale: 0.98, 
                transition: { duration: 0.1 },
            }}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }} 
            transition={{
                opacity: { duration: 0.3 },
                y: { type: 'spring', stiffness: 250, damping: 30 }, 
            }}
        >
            {/* Song Image Section */}
            <motion.div
                className="overflow-hidden relative rounded-md"
                whileHover={{ scale: 1.01 }} 
                transition={{ duration: 0.3 }}
            >
                <img className="rounded-md w-full h-40 object-cover" src={image} alt={name} />
            </motion.div>

            {/* Song Text Section */}
            <div className="mt-4">
                <p className="font-semibold text-lg text-white truncate">{name}</p>
                <p className="text-sm text-gray-400 mt-1 truncate">{desc}</p>
            </div>
        </motion.div>
    );
};

export default SongItem;
