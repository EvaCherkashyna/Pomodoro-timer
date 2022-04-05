
import React from 'react';
import { MainFont, H1Header, Circle, CircleDivFonts } from '../SettingsComponents'
const FontSettings = ({ setFont, font }) => {

    return (
        <MainFont>
            <H1Header>FONT</H1Header>
            <CircleDivFonts>
                <Circle className={font === 'first' ? "active firstFont" : "fonts firstFont"}
                    onClick={() => { setFont('first') }}>
                    Aa
                </Circle>
                <Circle className={font === 'second' ? "active secondFont" : "fonts secondFont"}
                    onClick={() => { setFont('second') }}>
                    Aa
                </Circle>
                <Circle className={font === 'third' ? "active thirdFont" : "fonts thirdFont"}
                    onClick={() => { setFont('third') }}>
                    Aa
                </Circle>
            </CircleDivFonts>
        </MainFont>

    )
}
export default FontSettings;