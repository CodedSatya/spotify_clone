import React from 'react'
import SlideShow from '../../Components/SlideShow'
import { music } from '../../../db/musicDB'

const HomeScreen = ({ rHide }) => {
  return (
    <div>
      <div className='h-[98vh] mx-4 overflow-y-scroll'>
        {
          music.map((m, index) => {
            return (
              <SlideShow key={index} rHide={rHide} title={m.title} tracks={m.tracks} />
            )
          })
        }
      </div>
    </div>
  )
}

export default HomeScreen