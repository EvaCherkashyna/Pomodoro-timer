import styled from 'styled-components'
import {IoSettingsSharp} from 'react-icons/io5'
export const Wrapper = styled.div`
padding:0;
margin:0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
export const Pomodoro = styled.h1`
color: var(--pom-color);
font-family: var(--ff-pom);
margin-top:2rem;
font-size: 2rem;
`
export const CirclePomidoro = styled.div`
width:24rem;
height:24rem;
margin-top: 3.5rem;
border-radius: 100%;
background-color: var(--circle-color);
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
box-shadow: rgb(49 52 103) -5rem -4rem 6rem;
`
export const Nav = styled.div`
width: 10rem;
height: 4rem;
position: relative;
color: var(--set-ico-color);
border-radius: 2rem;
text-align: center;
line-height:4rem;
font-family: var(--ff-pom);
background-color: var(--circle-color);
`
export const ContNav = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 2rem;
position:relative;
background-color: var(--circle-color);
border-radius: 2rem;
`
export const TimerNum = styled.p`
color: var(--pom-color);
font-family: var(--ff-time);
font-size:6rem
`
export const Pause = styled.p`
color: var(--pom-color);
font-family: var(--ff-num);
letter-spacing:1.2rem;
width: 8  rem;
font-size: 1rem;
margin: 0;
margin-left: 1.2rem;
padding: 0;

`
export const Ico = styled(IoSettingsSharp)`
color: grey;
font-size: 2rem;
margin-top:3.5rem;
`