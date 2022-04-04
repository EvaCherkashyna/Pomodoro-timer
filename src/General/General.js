import { Wrapper, Pomodoro, Nav, ContNav,  Ico } from './GeneralComponents'
import React, { useState, useEffect } from 'react'
import CirclePomodoro from './CircleComponents/CirclePomodoro'
import './General.css'
const General = ({ onClick, font, color, pomodoroCount, shortBreak, longBreak }) => {
  const [active, setActive] = useState('pomodoro')
  let classColor = 'active-red';
  if (color == 'red') classColor = 'active-red';
  else if (color == 'blue') classColor = 'active-blue';
  else if (color == 'purple') classColor = 'active-purple';
 
  useEffect(() => {
    console.log(classColor, active);
  }, [active, color]);
  return (
    <Wrapper >
      <Pomodoro>pomodoro</Pomodoro>
      <ContNav>
        <Nav id={active == 'pomodoro' ? classColor : null} onClick={() => setActive('pomodoro')}>
          pomodoro
        </Nav>
        <Nav id={active == 'short' ? classColor : null} onClick={() => setActive('short')}>
          short break
        </Nav>
        <Nav id={active == 'long' ? classColor : null} onClick={() => setActive('long')}>
          long break
        </Nav>
      </ContNav>
      <CirclePomodoro active={active} classColor = {classColor} font={font} color={color}
      pomodoroCount={pomodoroCount} shortBreak={shortBreak} longBreak={longBreak}/>
      <Ico className = {classColor} onClick={onClick} />
    </Wrapper>
  );
}

export default General;


