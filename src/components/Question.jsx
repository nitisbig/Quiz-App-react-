import React, { useEffect, useState } from 'react'
import data from '../asset/data'

const Option = ({option})=>{
    return(
        <div className='bg-blue-600 w-36 rounded-lg shadow-lg'>
            <h1 className='font-normol text-white text-center cursor-pointer'>{option}</h1>
        </div>
    )
}
const Timer = ({time})=>{
    return(
        <div className='h-16 w-16 bg-blue-900 text-center rounded-full border'>
            <h1 className='font-bold text-white text-xl pt-2'>{time}</h1>
        </div>
    )
}

const Question = ({passIndex}) => {
    const [quest, setQuest] = useState({question: 'What is capital city of Japan?', options:['Delhi', 'Kathmandu', 'New York', 'Tokyo'], correctIndex: 3})
    const [index, setIndex] = useState(0)
    

    useEffect(()=>{
        setQuest(data[index])
    },[index])
    function OptionOne(i){
        if(i===quest.correctIndex){
            setIndex(index+1)
            passIndex(index)

        }
        else{
            alert('wrong answer')
        }
    }
    function OptionTwo(i) {
        if(i===quest.correctIndex){
            setIndex(index+1)
            passIndex(index)

        }
        else{
            alert('wrong answer')
        }
    }
    function OptionThree(i) {
      if(i===quest.correctIndex){
        setIndex(index+1)
        passIndex(index)
      }
      else{
        alert('wrong answer')
      }
    }
    function OptionFour(i) {
      if(i===quest.correctIndex){
        setIndex(index+1)
        passIndex(index)
      }
      else{
        alert('wrong answer')
      }
    }
  return (
    <div className='relative flex flex-col justify-center items-center w-96 bg-red-500  rounded-lg px-2 py-8 shadow-lg'>
        <div className='bg-blue-500 py-2 px-24 rounded-lg'>
            <h1 className='font-normol text-white text-center'>{quest.question}</h1>
        </div>
        <div className='mt-2 grid grid-cols-2 gap-2'>
            <div onClick={()=>OptionOne(0)}><Option option={quest.options[0]} /> </div>
            <div onClick={()=>OptionTwo(1)}><Option option={quest.options[1]} /> </div>
            <div onClick={()=>OptionThree(2)}><Option option={quest.options[2]} /> </div>
            <div onClick={()=>OptionFour(3)}><Option option={quest.options[3]} /> </div>
        </div>
        <div className='absolute -top-9 -z-10'>
            <Timer time={33} />
        </div>
    </div>
  )
}

export default Question
