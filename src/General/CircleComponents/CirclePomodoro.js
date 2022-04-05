import React from 'react'
import PomodoroTimer from './Pomodoro'
import ShortBreak from './ShortBreak'
import LongBreak from './LongBreack'


const CirclePomodoro = ({ font, classColor, longBreak, shortBreak, pomodoroCount, active }) => {
    return (
        <div>
            {active === 'pomodoro' ? <PomodoroTimer font={font} classColor={classColor} pomodoroCount={pomodoroCount} /> : null}
            {active === 'short' ? <ShortBreak font={font} classColor={classColor} pomodoroCount={shortBreak} /> : null}
            {active === 'long' ? <LongBreak font={font} classColor={classColor} pomodoroCount={longBreak} /> : null}

        </div>
    )
}
export default CirclePomodoro;