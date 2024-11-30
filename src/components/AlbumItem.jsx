import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff13]'>
        <img className='rounded min-w-[156px] min-h-[156px]' src={image} alt="" />
        <div className='mt-2'>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    </div>
  )
}

export default AlbumItem