import React from 'react'
import {Main,H1Header,PomodoroSet,Pomodoro,PomodoroP,PomodoroInput} from '../SettingsComponents'

const TimeSettings = ({pomodoroCount,setPomodoroCount, shortBreak, longBreak, setShortBreak, setLongBreak}) => {

    return (<Main>
        <H1Header id="time">TIME (MINUTES)</H1Header>
        <PomodoroSet>
            <Pomodoro>
                <PomodoroP>pomodoro</PomodoroP>
                <PomodoroInput onChange = {(e) => setPomodoroCount(e.target.value)} value={pomodoroCount || 30} ></PomodoroInput>
            </Pomodoro>
            <Pomodoro>
                <PomodoroP>short break</PomodoroP>
                <PomodoroInput value={shortBreak || 5} onChange = {(e) => setShortBreak(e.target.value)}></PomodoroInput>
            </Pomodoro>
            <Pomodoro>
                <PomodoroP >long break</PomodoroP>
                <PomodoroInput value={longBreak || 10} onChange = {(e) => setLongBreak(e.target.value)}></PomodoroInput>
            </Pomodoro>
        </PomodoroSet>
    </Main>)
}
export default TimeSettings;