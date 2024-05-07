import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlubmItem from './AlubmItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
const DisplayHome = () => {
  return (
   <>
   <Navbar/>
   < div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Featured Chart</h1>
    <div className='flex overflow-auto'>
    {albumsData.map((item,index)=>(<AlubmItem key={index} name={index.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
   </div>

   < div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Today Biggest hits</h1>
    <div className='flex overflow-auto'>
   {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
   </div>
   </>
  )
}

export default DisplayHome