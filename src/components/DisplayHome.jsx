import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/assets';
import SongItem from './SongItem';

const DisplayHome = () => {
    return (
        <>
        <Navbar />
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {albumsData.map((item, index) => (
                <AlbumItem
                key={index}
                name={<span className="block sm:inline-block max-w-[150px] truncate text-center">{item.name}</span>} 
                desc={<span className="block sm:inline-block max-w-[150px] truncate text-center">{item.desc}</span>} 
                id={item.id}
                image={item.image}
                />
            ))}
            </div>
        </div>
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Biggest Hits 🔥</h1>
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                {songsData.map((item,index)=>(
                    <SongItem 
                        key={index} 
                        name={<span className="block sm:inline-block max-w-[150px] truncate text-center">{item.name}</span>} 
                        desc={<span className="block sm:inline-block max-w-[150px] truncate text-center">{item.desc}</span>}
                        id={item.id} 
                        image={item.image}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default DisplayHome;
