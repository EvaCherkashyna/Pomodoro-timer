import styled from 'styled-components'
import { IoCheckmarkSharp,IoCloseOutline } from 'react-icons/io5'
//Color
export const Circle = styled.div`
border-radius: 100%;
width: 3rem;
padding:0;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
`
export const CircleDivFonts = styled.div`
display: flex;
width: 10rem;
flex-direction: row;
justify-content: space-between;
`

export const Icone = styled(IoCheckmarkSharp)`
font-size: 1.5rem;
margin-top:1 rem;
`

export const H1Header = styled.h2`
font-size: 1rem;
margin:0;
font-family: var(--ff-set);
letter-spacing: 0.3rem;
font-weight: 600;
`

export const MainFont = styled.div`
width: 32rem;
height: 7rem;
align-items:center;
display: flex;
flex-direction: row;
justify-content: space-between;
`
// Header
export const Header = styled.div`
display: flex;
width: 32rem;
height: 6rem;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const Ico = styled(IoCloseOutline)`
color: grey;
font-size: 2rem;
margin-top:1 rem;
`
export const SettingsH1 = styled.h1`
margin:0;
margin-top: 1rem;
font-family: var(--ff-set);
font-weight: 600;
font-size: 1.8rem;
`
//Time
export const Main = styled.div`
width: 32rem;
margin: 1.5rem 0 1.5rem 0;
`
export const PomodoroSet = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
flex-direction: row;
`
export const Pomodoro = styled.div``
export const PomodoroP = styled.p`
font-family: var(--ff-pom);
color: rgb(159 159 162);
margin:0;
font-size: 0.8rem;
`
export const PomodoroInput = styled.input.attrs({ type: 'number' })`
width: 9rem;
height: 3rem;
background-color: rgb(238 241 250);
border: none;
border-radius: 0.6rem;
padding-left: 1rem;
outline: none;
:focus, :active{
    border: none;
}
`
