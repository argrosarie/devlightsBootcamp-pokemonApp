import React from 'react'
//import image from '../../assets/background-home.jpg'

const Login = () => {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
        <div className='bg-primary w-1/3 h-80 rounded-lg box-border flex justify-center '>
          <div className=''>
        <div className='flex flex-col items-center py-[72px] w-32 justify-center space-y-2 '>
          <input className='rounded-md text-lg' id='email__login' type="email" placeholder='Email' />
          <label className='font-black text-[#0C3348]' htmlFor="email__login">Email</label>

          <input className='rounded-md text-lg'  id='password__login' type="password" placeholder='Password'  />
          <label className='font-black text-[#0C3348]' htmlFor="password__login">Password</label>

          <button className='bg-[#5EBDFC] text-[#0C3348] text-xl w-32 rounded-md mt-32'>Log in</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login