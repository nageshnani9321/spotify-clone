import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import { FaSpotify } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { PlayerContext } from "./PlayerContext";

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumId = parseInt(id);
    const albumData = albumsData[albumId];
    const { playWithId } = useContext(PlayerContext);

    if (!albumData) {
        return <div>Album not found</div>;
    }

    const albumToSongsMap = {
        "Kanguva-Album": songsData.filter((song) => song.id === 0 || song.id === 1 || song.id === 2 || song.id === 3),
        "Maa Nanna Super Hero-Album": songsData.filter((song) => song.id >= 4 && song.id <= 8),
        "Ka-Album": songsData.filter((song) => song.id === 9),
        "Devara-Album": songsData.filter((song) => song.id >= 10 && song.id <= 14),
        "Orange-Album": songsData.filter((song) => song.id >= 15 && song.id <= 19),
        "Game-Changer": songsData.filter((song) => song.id >= 20 && song.id <= 22),
        "Thandel-Album": songsData.filter((song) => song.id === 23),
        "Lucky-Baskhar": songsData.filter((song) => song.id >= 24 && song.id <= 26), 
    };

    const albumSongs = albumToSongsMap[albumData.name] || [];

    const getTotalDuration = (songs) => {
        const totalSeconds = songs.reduce((total, song) => {
            const [minutes, seconds] = song.duration.split(":").map(Number);
            return total + minutes * 60 + seconds;
        }, 0);

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        return `${hours} hrs ${minutes} min`;
    };

    const totalDuration = getTotalDuration(albumSongs);

    const formatDate = (date) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const today = new Date();

    return (
        <>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end shadow-2xl p-6 rounded-2xl bg-gradient-to-r from-black to-transparent">
                <img className="w-48 rounded" src={albumData.image} alt={albumData.name} />
                <div className="flex flex-col text-white">
                    <p className="text-sm font-semibold text-stone-400">Playlist</p>
                    <h2 className="text-5xl font-bold md:text-7xl">{albumData.name}</h2>
                    <h4 className="text-lg text-stone-400 mt-2 max-w-[500px] truncate text-center">{albumData.desc}</h4>
                    <p className="mt-4 text-sm text-gray-500">
                        <FaSpotify className="inline-block w-5 text-green-600" />
                        <b>Spotify</b> • 2M likes •{" "}
                        <b>{albumSongs.length} songs</b> ({totalDuration})
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <FaRegClock className="m-auto w-4" />
            </div>
            <hr />

            {albumSongs.length > 0 ? (
                albumSongs.map((item, index) => {
                    const songDate = new Date(today);
                    songDate.setDate(today.getDate() + index);

                    return (
                        <div
                            onClick={() => playWithId(item.id)}
                            key={index}
                            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
                        >
                            <p className="text-white flex items-center">
                                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                                <img className="inline w-10 mr-3" src={item.image} alt="" />
                                <span className="block sm:inline-block max-w-[150px] truncate text-center">{item.name}</span>
                            </p>
                            <p className="text-[15px]">{albumData.name}</p>
                            <p className="text-[15px] hidden sm:block">{formatDate(songDate)}</p>
                            <p className="text-[15px] text-center">{item.duration}</p>
                        </div>
                    );
                })
            ) : (
                <div>No songs available for this album.</div>
            )}
        </>
    );
};

export default DisplayAlbum;
