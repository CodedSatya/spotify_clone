import React from 'react'

const PhoneSignUp = () => {
  return (
    <div className='h-[100vh] bg-[#121212] text-white flex flex-col items-center py-6'>
      <div className='flex flex-col items-center py-6 w-2/4'>
        <div className='my-6'>
          <p>Enter phone number</p>
        </div>
        <div className='flex w-full items-center justify-center gap-4'>

          <div className="region border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none">+91</div>


          <input type="number" placeholder='Phone number' className='border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none' />

        </div>
        <div className='w-full flex justify-start items-start'>
          <button className='bg-[#1ed760] w-40 py-4 rounded-full text-[#121212] font-bold my-8'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default PhoneSignUp