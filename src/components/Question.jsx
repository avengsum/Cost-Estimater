import React from 'react'
import ques from '../assets/ques'
import Quiz from './Quiz'

const Question = () => {
  return (
    <div>
        {ques.map((ques,index) => 
        (
            <Quiz key={index}  question={ques.ques} option1={ques.option1} option2={ques.option2} 
            option3={ques.option3} option4={ques.option4}   />
        ))}
    </div>
  )
}

export default Question