import React, { useState } from 'react'
import spotify from '../assets/icons/spotifyIcon.png'
import Email from './registerPages/Email'
import Password from './registerPages/Password'
import Details from './registerPages/Details'
import Agree from './registerPages/Agree'

const styles = {
  other_logins: "border border-[#666666] rounded-full py-2 mt-2 text-center w-full flex cursor-pointer",
  line: "line border-b-[0.5px] w-2/3 mx-auto  border-b-[#666666]",
  input: "border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none"
}


const Register = () => {


  const [regCred, setRegCred] = useState({
    username: "",
    password: "",
    name: "",
    year: "",
    month: "",
    day: "",
    gender: "",
  })


  const [steps, setSteps] = useState(0)


  const handleChange = (e) => {
    setLoginCreds((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleStep = (e) => {
    e.preventDefault();
    steps == 3? setSteps(0) : setSteps(prev => prev+1)
    console.log(steps);
  }

  return (
    <div className='h-[max-content] bg-[#121212] text-white flex flex-col items-center'>
      <div className="logo flex justify-center items-center pb-3 pt-8">
        <img src={spotify} className='w-10' alt="logo" />
      </div>
      {
        steps == 0 ? 
          <Email steps={steps} setSteps={setSteps} handleStep={handleStep}/> 
        : steps == 1? 
          <Password steps={steps} setSteps={setSteps} handleStep={handleStep}/>
        : steps == 2? 
          <Details steps={steps} setSteps={setSteps} handleStep={handleStep} />
        :steps==3?
          <Agree steps={steps} setSteps={setSteps} handleStep={handleStep} />
        :null
      }
        <p className='text-[12px] my-6 text-center'>This site is protected by reCAPTCHA and the Google <span className='underline'>Privacy Policy.</span> and <span className='underline'>Terms of services.</span> apply</p>
      <div className="footer">

      </div>
    </div>
  )
}

export default Register