import React from 'react'
import MusicCard from './MusicCard'

const SlideShow = ({title, tracks, rHide}) => {
  return (
    <div className=''>
      <div>
        <p className='text-2xl font-semibold py-4 '>{title}</p>
      </div>
      <div className=' overflow-x-hidden flex justify-center'>
        {
          tracks.slice(0,6).map((track, index)=>{
            return(
              <MusicCard key={track.id} rHide={rHide} title={track.title} artist={track.artist} image={track.image} descripiton={track.description} />
            )
          })
        }
        {
          
        }
      </div>
    </div>
  )
}

export default SlideShow