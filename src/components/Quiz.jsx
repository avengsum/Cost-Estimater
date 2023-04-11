import React from 'react'
import ques from '../assets/ques'

const Quiz = ({question,option1,option2,option3,option4}) => {
  return (
    <div>
        <h1>{question}</h1>
        <div>
            <input type="checkbox" />
            <label>{option1}</label>
            <input type="checkbox" />
            <label >{option2}</label>
            <input type="checkbox" />
            <label>{option3}</label>        
            <input type="checkbox" />
            <label>{option4}</label>        
            </div>
    </div>
  )
}

export default Quiz