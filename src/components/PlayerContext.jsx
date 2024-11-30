import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayerStatus] = useState(false);
    const [shuffleStatus, setShuffleStatus] = useState(false);
    const [repeatStatus, setRepeatStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    });
    const [volume, setVolume] = useState(1); 

    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false);
    };

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
    };


    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };


    const toggleShuffle = () => {
        setShuffleStatus(prev => !prev);
    };

    const toggleRepeat = () => {
        setRepeatStatus(prev => !prev);
    };

    const nextTrack = () => {
        const currentIndex = songsData.indexOf(track);
        let nextIndex;
    
        if (shuffleStatus) {
            do {
                nextIndex = Math.floor(Math.random() * songsData.length);
            } while (nextIndex === currentIndex);
        } else {
            nextIndex = (currentIndex + 1) % songsData.length;
        }
    
        setTrack(songsData[nextIndex]); 
        setTime({ currentTime: { second: 0, minute: 0 }, totalTime: { second: 0, minute: 0 } }); 
        audioRef.current.currentTime = 0;
        audioRef.current.src = songsData[nextIndex].audioFile;
        audioRef.current.load(); 
    
        audioRef.current.oncanplaythrough = () => {  
            audioRef.current.play(); 
        };
    };

    const repeatTrack = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const previousTrack = () => {
        const currentIndex = songsData.indexOf(track);
        const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
        setTrack(songsData[prevIndex]); 
        setTime({ currentTime: { second: 0, minute: 0 }, totalTime: { second: 0, minute: 0 } }); 
        audioRef.current.currentTime = 0; 
        audioRef.current.src = songsData[prevIndex].audioFile;
        audioRef.current.load(); 
    
        audioRef.current.oncanplaythrough = () => {  
            audioRef.current.play(); 
        };
    };

    const seekSong = async (e) => {
        const offsetX = e.nativeEvent.offsetX;
        const width = seekBg.current.offsetWidth;
        const newTime = (offsetX / width) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
    };

    useEffect(() => {
        const handleEnd = () => {
            if (repeatStatus) {
                repeatTrack();
            } else {
                nextTrack();
            }
        };

        if (audioRef.current) {
            audioRef.current.onended = handleEnd;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.onended = null;
            }
        };
    }, [repeatStatus, track, shuffleStatus]);

    useEffect(() => {
        if (audioRef.current) {
            const updateTime = () => {
                const current = audioRef.current.currentTime;
                const duration = audioRef.current.duration;

                setTime({
                    currentTime: {
                        second: Math.floor(current % 60),
                        minute: Math.floor(current / 60)
                    },
                    totalTime: {
                        second: Math.floor(duration % 60),
                        minute: Math.floor(duration / 60)
                    }
                });

                if (seekBar.current) {
                    seekBar.current.style.width = `${(current / duration) * 100}%`;
                }
            };

            audioRef.current.ontimeupdate = updateTime;

            return () => {
                audioRef.current.ontimeupdate = null;
            };
        }
    }, [track]);

    const contextValue = {
        songsData,
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayerStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        nextTrack,
        previousTrack,
        seekSong,
        shuffleStatus,
        toggleShuffle,
        repeatStatus,
        toggleRepeat,
        volume,
        changeVolume,
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;



