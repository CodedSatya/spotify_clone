import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../assets/icons/googleLogo.webp'
import facebook from '../../assets/icons/facebookIcon.png'
import apple from '../../assets/icons/AppleIcon.png'


const styles = {
  other_logins: "border border-[#666666] rounded-full py-2 mt-2 text-center w-full flex cursor-pointer",
  line: "line border-b-[0.5px] w-2/3 mx-auto  border-b-[#666666]",
  input: "border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none"
}

const Email = ({steps, setSteps, handleStep}) => {
  return (
    <div className="container bg-transparent  w-1/4">
          <h1 className='text-[42px] text-center font-bold'>Sign up to start <br /> listening</h1>
          <div className='flex flex-col '>
            <label htmlFor="email" className=''>Email address</label>
            <input type="email" placeholder='name@domain.com' className='border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none' />
            <Link to="phoneLogin" className='underline text-[#1ed760]'>Use phone number instead.</Link>
            <button className='bg-[#1ed760] py-4 rounded-full text-[#121212] font-bold my-8'
              onClick={handleStep}
            >Next</button>
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex items-center gap-3 mb-10'>
              <div className={styles.line}></div> or <div className={styles.line}></div>
            </div>
            <div className={styles.other_logins}>
                <img className='w-6 mx-10' src={google} alt="" />
                <p className="">Continue with Google</p>
              </div>
              <div className={styles.other_logins}>
                <img className='w-6 mx-10' src={facebook} alt="" />
                <p className="">Continue with Facebook</p>
              </div>
              <div className={styles.other_logins}>
                <img className='w-6 mx-10' src={apple} alt="" />
                <p className="text-center">Continue with Apple</p>
              </div>
              <div className={`${styles.line} w-full mt-10`}></div>
              <p className='text-center my-20'>Already have an account? <Link to="/login" className='underline'>Log in here</Link></p>
          </div>
        </div>
  )
}

export default Email