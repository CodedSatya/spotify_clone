import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='w-full bg-[#727272] h-1 rounded-full overflow-hidden'>
      <div  className={`w-${progress}/3 bg-[#1ed760] h-1 rounded-full`}></div>
    </div>
  )
}

export default ProgressBar