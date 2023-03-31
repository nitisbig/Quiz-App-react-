import React, { useState } from 'react'

const Prize = () => {
    const [prize, setPrizs] = useState([
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
    <div className='w-64 h-96 bg-red-500 rounded-lg shadow-lg flex justify-center items-center'>
      <ul className='px-5 leading-5 border-y-2 border-red-400'>
        {prize.reverse().map(res=>(
            <li className='text-white' key={res.level}>
                {res.level} - {res.money}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Prize
