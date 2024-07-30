import React from 'react'

const ToogleButton = ({check, setCheck}) => {

  const position = check? "right-0 bg-black" : "left-0 bg-white"
  const bgColor = check? "bg-[#1ed760]" : "bg-[#a7a7a7]"
  return (
    <div className={`w-10 h-6 ${bgColor} cursor-pointer rounded-full relative`}
      onClick={() => {setCheck(!check)}}
    >
      <div className={`w-4 h-4 m-1 rounded-full absolute ${position}`}>
        
      </div>
    </div>
  )
}

export default ToogleButton