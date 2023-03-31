import React, { useEffect, useState } from 'react'
import Prize from './Prize'
import Question from './Question'
import Result from './Result'
import Title from './Title'

const Layout = () => {
  const [current, setCurrent] = useState(0)
 function passInd(ind){
  setCurrent(ind)
 }
  return (
    <div>
      <div className='flex justify-center mt-6 relative'>
        <Title />
      </div>
      <div className='flex justify-center mt-10'>
        <Result  index={current} />
      </div>
      <div className='absolute top-20 right-10'>
        <Prize />
      </div>
      <div className='flex justify-center mt-52'>
        <Question passIndex={passInd}  />
      </div>
    </div>
  )
}

export default Layout
