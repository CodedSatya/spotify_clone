import React from 'react'

const MusicCard = ({image, title, artist, descripiton, rHide}) => {

  const style = rHide? "w-[12vw]" : "w-[7.9vw]"


  return (
    <div className={`${style} flex-shrink-0 p-2 rounded-md cursor-pointer hover:bg-[#444444b4]`}>
      <div className=''>
        <img className={`rounded-md ${style}`} src={image} alt="logo" />
      </div>
      <div>
        <p>{title}</p>
        <p>{artist}</p>
        <p className='truncate overflow-hidden'>{descripiton}</p>
      </div>
    </div>
  )
}

export default MusicCard