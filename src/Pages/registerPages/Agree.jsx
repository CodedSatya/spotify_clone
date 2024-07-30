import React from 'react'
import back from '../../assets/svgs/back.svg'
import ProgressBar from '../../Components/ProgressBar'

const Agree = ({ steps, setSteps, handleStep }) => {
  return (
    <div className='h-[79vh]'>
      <div className='w-[30vw]'>
        <div className='my-3'>
          <ProgressBar progress={steps} />
        </div>
        <div className='flex items-center'>
          <img src={back} onClick={()=>{
            setSteps(steps-1)
          }} className='px-4 cursor-pointer w-14'></img>
          <div className='flex flex-col'>
            <p className='text-[#a7a7a7]'>Step {steps} of 3</p>
            <p className='font-bold'>Terms & Conditions</p>
          </div>
        </div>
        <div className='flex gap-1 flex-col mx-10 my-10'>
          <div className='flex gap-4 bg-[#202020] py-4 my-2 rounded-md px-4'>
            <input id='condition1' type="checkbox"/>
            <label htmlFor="condition1">I would prefer not to receive marketing messages from spotify</label>
          </div>
          <div className='flex gap-4 bg-[#202020] py-4 my-2 rounded-md px-4'>
            <input id='condition2' className='w-6 bg-[#121212]' type="checkbox"/>
            <label htmlFor="condition2">Share my registration data with Spotify's content providers for marketing purpose</label>
          </div>
          <p>By clicking on sign-up, you agree to Spotify's <span className='underline text-[#1ed760]'>Terms and Conditions of Use.</span></p>
          <p>To learn more about how Spotify collects, use, shares and protects your personal data, please see <span className='underline text-[#1ed760]'>Spotify's Privacy Policy.</span></p>
        </div>
        <button className='bg-[#1ed760] py-4 w-1/2 mx-10 rounded-full text-[#121212] font-bold my-8'
          onClick={handleStep}
        >Sign up</button>
      </div>
    </div>
  )
}

export default Agree