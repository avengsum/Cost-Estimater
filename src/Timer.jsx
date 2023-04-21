import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const Timer = ()  => {

    const [time , setTime] = useState(90);

    const nav = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            if(time === 0){
                nav("/result")
            }
            setTime(time-1);
        },1000)

    },[time])

    return(

        <p>Time Left : {time}sec </p>
    )

}

export default Timer;