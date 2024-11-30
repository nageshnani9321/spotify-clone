import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { FaPause, FaPlay, FaShuffle } from 'react-icons/fa6';
import { FaRedo, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { PlayerContext } from './PlayerContext';
import { BsFilePlay } from 'react-icons/bs';
import { TbMicrophone2 } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Player = () => {
    const { 
        seekBar, seekBg, playStatus, play, pause, track, time, 
        nextTrack, previousTrack, seekSong, shuffleStatus, toggleShuffle, 
        repeatStatus, toggleRepeat, volume, changeVolume 
    } = useContext(PlayerContext);

    const formatTime = (minute, second) => {
        return `${minute}:${second < 10 ? '0' + second : second}`;
    };

    return (
        <div className="bg-gradient-to-r from-black to-gray-900 text-white px-4 py-4 md:py-6 md:h-[15%] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <motion.div
                className="flex items-center gap-4 w-full md:w-auto flex-col md:flex-row justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img className="w-14 h-14 object-cover rounded-full border-2 border-gray-600 shadow-lg" src={track.image} alt={track.name} />
                <div className="text-left">
                    <p className="text-sm md:text-lg font-semibold">{track.name}</p>
                    <p className="text-xs text-gray-400 max-w-[180px] truncate hidden md:block">{track.desc}</p>
                </div>
            </motion.div>


            <motion.div className="flex flex-col items-center gap-4 w-full md:w-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="flex gap-6 items-center justify-center">
                    <motion.div whileHover={{ scale: 1.1 }} className={`w-6 h-6 p-2 cursor-pointer transition-all duration-300 ${shuffleStatus ? 'text-green-500' : 'text-white'}`} onClick={toggleShuffle}>
                        <FaShuffle />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-6 h-6 p-2 cursor-pointer transition-all duration-300"
                        onClick={previousTrack}
                    >
                        <FaStepBackward />
                    </motion.div>
                    {playStatus ? (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 p-3 cursor-pointer transition-all duration-300 bg-green-500 rounded-full flex justify-center items-center"
                            onClick={pause}
                        >
                            <FaPause className="w-6 h-6 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 p-3 cursor-pointer transition-all duration-300 bg-green-500 rounded-full flex justify-center items-center"
                            onClick={play}
                        >
                            <FaPlay className="w-6 h-6 text-white" />
                        </motion.div>
                    )}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-6 h-6 p-2 cursor-pointer transition-all duration-300"
                        onClick={nextTrack}
                    >
                        <FaStepForward />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-6 h-6 p-2 cursor-pointer transition-all duration-300 ${repeatStatus ? 'text-green-500' : 'text-white'}`}
                        onClick={toggleRepeat}
                    >
                        <FaRedo />
                    </motion.div>
                </div>

                {/* Seekbar */}
                <motion.div
                    className="flex items-center gap-4 mt-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-sm font-semibold">{formatTime(time.currentTime.minute, time.currentTime.second)}</p>
                    <div 
                        ref={seekBg} 
                        onClick={seekSong} 
                        className="relative w-[50vw] sm:w-[60vw] max-w-[400px] bg-gray-700 rounded-full cursor-pointer"
                    >
                        <motion.hr
                            ref={seekBar}
                            className="h-1 w-full border-none bg-gradient-to-r from-green-500 to-green-100 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${(time.currentTime.total / time.totalTime.total) * 100}%` }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                    <p className="text-sm font-semibold">{formatTime(time.totalTime.minute, time.totalTime.second)}</p>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex items-center gap-4 mt-4 justify-center opacity-75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <BsFilePlay className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-500 hidden md:block" />
                <TbMicrophone2 className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-500 hidden md:block" />
                <img className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-500 hidden md:block" src={assets.queue_icon} alt="Queue Icon" />
                <img className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-500 hidden md:block" src={assets.speaker_icon} alt="Speaker Icon" />

                <div className="w-20 sm:w-24 hidden md:block">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={changeVolume}
                        className="w-full bg-slate-50 h-1 rounded-full cursor-pointer"
                    />
                </div>
                <img className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-500 hidden md:block" src={assets.zoom_icon} alt="Zoom Icon" />
            </motion.div>
        </div>
    );
};

export default Player;



