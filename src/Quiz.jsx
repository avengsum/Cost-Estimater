import React, { useState } from 'react'
import ques from './assets/ques'
import { Link } from 'react-router-dom';
import Timer from './Timer';

const Home = () => {

  const [currentQues,setCurrentQues] = useState(0);
  const [score , setScore] = useState(0);

  const handleScore = (isCorrect) => {
    if(isCorrect){
      setScore(score+1);
    }
  }

  const handleBack = () => {
    setCurrentQues(currentQues-1);
  }

  const handleNext = () => {
    setCurrentQues(currentQues+1);
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
          <button onClick={() => handleScore(ques.isCorrect)} key={index} >{ques.anwer}</button>
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