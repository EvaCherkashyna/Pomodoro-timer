import React from 'react'
import { Circle, CircleDivFonts, Icone, H1Header, MainFont } from '../SettingsComponents'
const ColorSettings = ({ color, setColor }) => {
    return (
        <MainFont>
            <H1Header>COLOR</H1Header>
            <CircleDivFonts>
                <Circle className="firstColor" onClick={() => setColor("red")}>
                    {color === "red" ? <Icone /> : null}
                </Circle>
                <Circle className="secondColor" onClick={() => setColor("blue")}>
                    {color === "blue" ? <Icone /> : null}
                </Circle>
                <Circle className="thirdColor" onClick={() => setColor("purple")} >
                    {color === "purple" ? <Icone /> : null}
                </Circle>
            </CircleDivFonts>
        </MainFont>
    )
}
export default ColorSettings;