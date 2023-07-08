import React from 'react'
import logo from './images/nextjs-logo.png'
export const NextFunction = ({react}) => {
  return (
    <>
    <div>
    {<img src={react} alt="react"/>}
    <img className='nextf' src={logo}  alt="next"/>
    </div>
    
   
    </>
  )
}
