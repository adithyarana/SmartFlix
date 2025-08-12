import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";

const VedioTitle = ({moviedata}) => {

    const {original_title , overview} = moviedata;

  return (
    <div className="flex h-screen  aspect-video flex-col gap-6  absolute bottom-4 pt-[10rem] 2xl:pt-[19rem]  left-20 ">

        <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold drop-shadow-md text-white'>{original_title}</h1>
        <p className='text-md w-1/2  font-medium p-2 text-wrap text-justify text-[#D9D9D9]'>{overview}</p>   
        </div>

        <div className='flex gap-4'>
            <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded cursor-pointer flex items-center gap-2 opacity-80'> <span><FaPlay /></span>Play</button>
            <button className='bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded cursor-pointer flex items-center gap-2 opacity-80'> <span><IoMdInformationCircle /></span>More Info</button>
        </div>
    </div>
  )
}

export default VedioTitle