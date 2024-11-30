import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './components/PlayerContext';

const App = () => {
    const { audioRef, track } = useContext(PlayerContext);

    return (
        <div className="h-screen bg-black flex flex-col">
            <div className="flex flex-1 overflow-auto">
                <Sidebar />
                <Display />
                <div className="flex-1"></div>
            </div>
            <Player />
            <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </div>
    );
};

export default App;




