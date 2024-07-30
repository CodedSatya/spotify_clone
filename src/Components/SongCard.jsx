import React from 'react'

const SongCard = ({image, title, owner}) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <img className='w-14 rounded-md mb-4 mr-4' src={image} alt="img" />
      <div>
        <p className='font-semibold'>
          {title}
        </p>
        <p className='text-[#cccccc] text-[15px]'>
          Playlist <span className='text-xl'>.</span> {owner}
        </p>
      </div>
    </div>
  )
}

export default SongCard