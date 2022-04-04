import {Header,Ico,SettingsH1} from '../SettingsComponents'

const HeaderSettings = ({onClick}) => {

    return (
        <Header>
            <SettingsH1>Settings</SettingsH1>
            <Ico onClick={onClick} />
        </Header>
    )
}
export default HeaderSettings;