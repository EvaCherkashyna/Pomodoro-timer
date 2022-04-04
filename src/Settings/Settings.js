import styled from "styled-components";
import React from 'react';
import './Settings.css'
import FontSetting from "./SettingsComponents/FontSettings";
import TimeSetting from "./SettingsComponents/TimeSettings";
import ColorSettings from "./SettingsComponents/ColorSettings";
import HeaderSettings from "./SettingsComponents/HeaderSettings"
const Wrapper = styled.div`
position: fixed;
top: 18vh;
display: flex;
flex-direction: column;
align-items: center;
width: 40vw;
height: 64vh;
border-radius: 2rem;
background-color: rgb(255 255 255);
`
const Hr = styled.hr`
width: 32rem;
margin: 0;
`

const Settings = (
    { onClick,
        setFont,
        font,
        color,
        setColor,
        pomodoroCount,
        setPomodoroCount,
        setShortBreak,
        setLongBreak,
        longBreak,
        shortBreak
    }
) => {

    return (
        <Wrapper >
            <HeaderSettings onClick={onClick} />
            <Hr />
            <TimeSetting pomodoroCount={pomodoroCount} setPomodoroCount={setPomodoroCount} 
            setShortBreak={setShortBreak} setLongBreak={setLongBreak} longBreak={longBreak} shortBreak={shortBreak}
            />
            <Hr />
            <FontSetting setFont={setFont} font={font} />
            <Hr />
            <ColorSettings color={color} setColor={setColor} />
        </Wrapper>
    );
}

export default Settings;
