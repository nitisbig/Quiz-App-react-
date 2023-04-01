import React, { useEffect, useState } from 'react'
import {MdReplay} from 'react-icons/md'

const WrongAnswer = ()=>{
  return(
    <div className='bg-red-900 h-24 w-full px-5 rounded-xl flex justify-center items-center'>
      <h1 className='text-white font-bold text-2xl'>That's Incorrect!</h1>
    </div>
  )
}

const PlayAgain = ()=>{
  return(
    <div className='bg-blue-100 text-6xl rounded-lg text-blue-900'>
      <MdReplay />
    </div>
  )
}
const Result = ({ index, getIncorrectState}) => {
  const [prize, setPrizs] = useState([
    {level:0, money: 0},
    {level:1,money: 1000},
    {level:2,money: 2000},
    {level:3,money: 3000},
    {level:4,money: 5000},
    {level:5,money: 10000},
    {level:6,money: 20000},
    {level:7,money: 40000},
    {level:8,money: 80000},
    {level:9,money: 160000},
    {level:10,money: 320000},
    {level:11,money: 640000},
    {level:12,money: 1250000},
    {level:13,money: 2500000},
    {level:14,money: 5000000},
    {level:15,money: '1 Crors'},
    {level:16,money: '7 Crores'},
])

  return (
    <div className='h-24 w-96 bg-red-500 rounded-lg shadow-lg relative'>
      <h1 className='font-bold text-white text-2xl text-center'>You Won</h1>
      <div className='bg-white mx-10 my-2 rounded-lg'>
        <h1 className='text-center text-lg'>{prize[index].money}</h1>
      </div>
      <div className='absolute -bottom-40'>
        {getIncorrectState && <WrongAnswer />}
      </div>
      <div  className='absolute -bottom-36 right-12'>
        {getIncorrectState && <PlayAgain />}
      </div>
    </div>
  )
}

export default Result
