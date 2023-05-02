import React, { useState } from 'react'
import ques from './assets/ques'
import { Link } from 'react-router-dom';
import Timer from './Timer';

const Home = () => {

  const [currentQues,setCurrentQues] = useState(0);
  const [selectedOption , setSelectedOption] = useState({});
  const [score,setScore] = useState(0);

  const handleOption = (selected) => {
    if (selectedOption[currentQues] !== selected) {
      setSelectedOption({...selectedOption, [currentQues]: selected});
    }
  }
  console.log(selectedOption)

  const handleScore = () => {
    let newScore = 0
    ques.forEach((ques,index) => {
       if(ques.answer === selectedOption[index]){
        newScore=+1;
      }
    })
    setScore((current) => current + newScore)
  }

  console.log(score)

  const handleBack = () => {
    setCurrentQues(currentQues-1);
  }

  const handleNext = () => {
    setCurrentQues(currentQues+1);
    handleScore();
  }
  console.log(score);


  return (
    <div>
      <Timer />
      <div>
        <h1>{ques[currentQues].ques}</h1>
      </div>
      <div>
        {ques[currentQues].ansOption.map((ques,index) => (
          <label htmlFor="">
            <input type='radio' 
            value={ques.option}
            onChange={() => handleOption(ques.option)}
            name={ques[currentQues].ansOption}/>
            {ques.option}
          </label>
        ))}
      </div>
      <div>
        { currentQues === 0? 
        <button disabled={true}>Back</button>
        : <button onClick={() => handleBack()}>Back</button>
      }
        { ques.length -1 == currentQues ?
        <Link to={'/result'}><button>Submit</button></Link>:
        <button onClick={() => handleNext()}>Next</button>}
      </div>
    </div>
  )
}

export default Home