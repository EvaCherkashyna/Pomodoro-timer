import React, { useState } from 'react'
import './App.css';
import General from './General/General';
import Settings from './Settings/Settings'
function App() {
  const [settings, setSettings] = useState(false);
  const [font, setFont] = useState('first');
  const [color, setColor] = useState('red');
  const [pomodoroCount, setPomodoroCount] = useState(25)
  const [shortBreak, setShortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(10)
  console.log(pomodoroCount);

  return (
    <div className="App">
      <General
        onClick={() => setSettings(!settings)}
        font={font}
        color={color}
        pomodoroCount={pomodoroCount}
        shortBreak={shortBreak}
        longBreak={longBreak}
      />
      {settings ? <Settings
        setPomodoroCount={setPomodoroCount} setShortBreak={setShortBreak} setLongBreak={setLongBreak}
        pomodoroCount={pomodoroCount} shortBreak={shortBreak} longBreak={longBreak}
        onClick={() => setSettings(!settings)}
        setFont={(e) => setFont(e)} font={font}
        color={color} setColor={(color) => setColor(color)}
      /> : null}
    </div>
  );
}
export default App;
