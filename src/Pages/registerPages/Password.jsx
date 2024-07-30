import React from 'react'
import back from '../../assets/svgs/back.svg'
import ProgressBar from '../../Components/ProgressBar'
import { ArrowBackIos } from '@mui/icons-material'

const Password = ({ steps, setSteps, handleStep }) => {
  return (
    <div className='h-[79vh]'>
      <div className='w-[30vw]'>
        <div className='my-3'>
          <ProgressBar progress={steps} />
        </div>
        <div className='flex items-center'>
          <ArrowBackIos src={back} onClick={()=>{
            setSteps(steps-1)
          }} />
          <div className='flex flex-col'>
            <p className='text-[#a7a7a7]'>Step {steps} of 3</p>
            <p className='font-bold'>Create password</p>
          </div>
        </div>
        <div className='flex flex-col mx-10 my-10'>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' className='border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none mb-4' name="password" placeholder='password' />
          <p>your password must contain at least</p>
          <p>1 letter</p>
          <p>1 number or special character (example:#?!&)</p>
          <p>10 characters</p>
        </div>
        <button className='bg-[#1ed760] py-4 w-1/2 mx-10 rounded-full text-[#121212] font-bold my-8'
          onClick={handleStep}
        >Next</button>
      </div>
    </div>
  )
}

export default Password