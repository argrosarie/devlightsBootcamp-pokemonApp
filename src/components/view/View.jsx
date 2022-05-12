import React from 'react';

const View = ({id, name, image, type}) => {
  return (
    <div className='bg-black h-full w-screen flex flex-col items-center'>
      <div className='bg-primary w-[400px] h-72 m-2 rounded-lg '>
      <img className='h-3/4 w-full pt-[20px]' src={image} alt={name} />
      <div className='flex justify-center '>
        <h3>{name}</h3>
        <p>{type}</p>
      </div>
      </div>
    </div>
  )
}

export default View