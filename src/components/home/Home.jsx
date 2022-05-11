import React from 'react'
import image from '../../assets/background-home.jpg';



const Home = () => {
  return (
    <>
    <nav className='w-full h-20 bg-black flex p-4 justify-between'>
      <div className=''>
        <p className='text-5xl text-primary '>Pokemon App</p> 
        </div>
      <div className=''>
        <button className=' cursor-pointer m-6 h-10 w-36 rounded-md 
        text-xs text-secondary shadow-sm font-bold p-2 bg-white    lg:ml-16'>SIGN IN</button>
      </div>
    </nav>
    
          <div className='relative text-center'>
                 <p className='text-primary text-3xl font-bold bg-transparent absolute top-24  inset-y-0 right-8 w-[600px]'>
                     This is an App made for Devlights Bootcamps. 
                     Here you can find a list to find your favorite Pokemon and see every part of your character.
                     You have to log in in this App in order to see them.<br/>
                     GOTTA CATCH'EM ALL!
                     </p>
                  <img className="h-screen w-screen" src={image} alt="pokemon   image" />
          </div>
          
    </>
  )
}

export default Home