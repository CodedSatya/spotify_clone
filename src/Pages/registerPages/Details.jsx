import React from 'react'
import back from '../../assets/svgs/back.svg'
import ProgressBar from '../../Components/ProgressBar'

const Details = ({ steps, setSteps, handleStep }) => {
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
            <p className='font-bold'>Tell us about yourself</p>
          </div>
        </div>
        <div className='flex flex-col mx-10 my-10'>
          <div>
            <label htmlFor="name">Name <br /> <span className='text-[12px]'>This name will appear on your pofile</span> </label>
            <input type="text" className='w-full border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none' id='name' name='name' placeholder='Name' />
          </div>
          <div>
            <label htmlFor="dob">Date of birth <br /> <span className='text-[12px]'>Why do we need your date of birth?<span className='underline'>Learn more</span></span></label>
            <div className='flex gap-2'>
              <input className='appearance-none w-[25%] border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none' type="number"  placeholder='yyyy'/>
              <div className='w-[50%] border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none'>Drop</div>
              <input className='w-[25%] border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none' type="number" placeholder='dd'/>
            </div>
          </div>
          <div>
          <label>Gender <br /> <span className='text-[12px]'>We use your gender to help personalize our content recommendations ads for you.</span></label>
          <label htmlFor="male">Man</label>
          <input type="radio" id='male' value='male' name='gender' />
          <label htmlFor="female">Woman</label>
          <input type="radio" id='female' value='female' name='gender' />
          <label htmlFor="non-binary">Non-Binary</label>
          <input type="radio" id='non-binary' value='non-binary' name='gender' />
          <label htmlFor="something_else">Something else</label>
          <input type="radio" id='something_else' value='se' name='gender' />
          <label htmlFor="prefer_not_to_say">Prefer not to say</label>
          <input type="radio" id='prefer_not_to_say' value='pns' name='gender' />
          </div>
        </div>
        <button className='bg-[#1ed760] py-4 w-1/2 mx-10 rounded-full text-[#121212] font-bold my-8'
          onClick={handleStep}
        >Next</button>
      </div>
    </div>
  )
}

export default Details