import { Link } from "react-router-dom"

const Start = ( ) => {
    return (
        <div>
            <h1>
            Welcome to the challenge
            </h1>
            <p>You will be presented with 3 MCQs.</p>
            <p>You have to solve it in give amount of time</p>

            <Link to={"/quiz"} ><button>Start Quiz</button></Link>
        </div>
    )
}

export default Start