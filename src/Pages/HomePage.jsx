import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Add, ArrowForward, Clear, Home, Search } from '@mui/icons-material'
import SongCard from '../Components/SongCard'
import card1 from '../assets/images/card1.jpg'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeScreen from './HomePages/HomeScreen'

const HomePage = () => {


  const [rHide, setRHide] = useState(false)
  const [serachPage, setSearchPage] = useState(false)


  let pageStack = []

  const layout = rHide ? 'hidden' : 'block'
  const mainLayout = rHide ? 'w-3/4' : 'w-2/4'

  return (
    <div className='flex w-full h-screen text-white bg-[#000000]'>
      <div className='w-1/4 mx-1'>
        {/* Left nav */}
        <div className=' h-[15vh] my-2 rounded-lg bg-[#121212]'>
          {/* Nav */}
          <div className='flex cursor-pointer gap-2 p-4'>
            <Home />
            <button
              onClick={() => {
                setSearchPage(false)
              }}
            >Home</button>
          </div>
          <div className='flex cursor-pointer gap-2 p-4'>
            <Search />
            <button onClick={() => {
              setSearchPage(true)
            }}>Search</button>
          </div>

        </div>
        <div className='h-[82vh] my-2 rounded-lg bg-[#121212]  px-4'>
          {/* Your Library */}
          <div>
            <div className='flex justify-between h-[8vh] items-center'>
              <div className='flex gap-4'>
                <HorizontalSplitIcon className='-rotate-90' />
                <p>Your Library</p>
              </div>
              <div className='flex gap-2'>
                <Add />
                <ArrowForward />
              </div>
            </div>
            <p className='rounded-full bg-[#60606094] w-[5vw] h-7 text-center'>Playlists</p>
            <div className='flex justify-between my-4'>
              <Search />
              <div>
                Recents <FormatListBulletedIcon />
              </div>
            </div>
          </div>
          <SongCard image={card1} title={"M O O D"} owner={"Satyam"} />
          <SongCard image={card1} title={"MyFavouritePlaylist"} owner={"Satyam"} />
          <SongCard image={card1} title={"Indie Mix"} owner={"Satyam"} />
        </div>
      </div>
      <div className={`${mainLayout} h-[100vh]`}>
        {/* Main section */}
        <div className='h-[98%] rounded-lg mx-1 my-2 bg-[#121212]'>
          {
            serachPage ? <div>Search</div> : <HomeScreen rHide={rHide} />
          }
        </div>
      </div>
      <div className={`${layout} w-1/4 h-[98vh]`}>
        {/* Right side bar */}
        <div className={` rounded-lg my-2 mx-1 h-full bg-[#121212] relative`}>
          <button onClick={() => {
            setRHide(!rHide)
          }}

            className='absolute top-2 right-2 rounded-full text-[#606060]'
          >
            <Clear />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage