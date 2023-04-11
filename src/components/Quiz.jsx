import React from 'react'

const Quiz = ({question, option1, option2, option3, option4}) => {
  return (
    <div>
      <h1>{question}</h1>
      <div>
        <input type="radio" name="option" id="option1" />
        <label htmlFor="option1">{option1}</label>
        <input type="radio" name="option" id="option2" />
        <label htmlFor="option2">{option2}</label>
        <input type="radio" name="option" id="option3" />
        <label htmlFor="option3">{option3}</label>        
        <input type="radio" name="option" id="option4" />
        <label htmlFor="option4">{option4}</label>        
      </div>
    </div>
  )
}

export default Quiz