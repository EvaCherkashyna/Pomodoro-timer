import { CirclePomidoro, Pause } from '../GeneralComponents'
import React, { useEffect, useState } from 'react'

const PomodoroTimer = ({ font, classColor, pomodoroCount }) => {
    const [active, setActive] = useState(false)
   const [minutes, setMinutes] = useState(pomodoroCount);
   const [seconds, setSeconds] = useState(0);
    console.log(minutes, " ", seconds);
    useEffect(() => setMinutes(pomodoroCount), [pomodoroCount])
    useEffect(() => {
        if (active === true) {
            if (minutes !== 0 || seconds !== 0) {
                const intervalId = setInterval(() => updateTime(), 1000)
                return () => clearInterval(intervalId)
            }
        }
    })

    function updateTime() {
        if (seconds === 0) {
            setMinutes(minutes-1);
            setSeconds(59)
        }
        else {
            setSeconds(seconds-1)
        }

    }
    return (
        <CirclePomidoro>
            <p font={font} className='time'>
                {minutes}: 
                {seconds >= 10 
                ? seconds 
                : `0${seconds}`}
                </p>
            <Pause className={classColor} onClick={() => setActive(!active)} >PAUSE</Pause>
        </CirclePomidoro>


    )
}
export default PomodoroTimer;