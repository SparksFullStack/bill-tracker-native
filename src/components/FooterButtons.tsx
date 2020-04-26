import React from 'react'
import { Text, FooterTab, Footer, Button } from 'native-base'
import { Link } from 'react-router-native'
import { ActiveTab } from '../constants'

type FooterButtonsProps = {
    activeTab: ActiveTab
    updateActiveTab: (newActiveTab: ActiveTab) => void
}

const FooterButtons = ({ activeTab, updateActiveTab }: FooterButtonsProps) => {
    return (
        <Footer>
            <FooterTab>
                <Button onClick={() => updateActiveTab(ActiveTab.CALENDAR)} active={activeTab === ActiveTab.CALENDAR}>
                    <Link to='/calendar'>
                        <Text>Calendar</Text>
                    </Link>
                </Button>
                <Button onClick={() => updateActiveTab(ActiveTab.LIST)} active={activeTab === ActiveTab.LIST}>
                    <Link to='/list'>
                        <Text>List</Text>
                    </Link>
                </Button>
                {/* <Button>
                    <Link to='/'>Add Bill</Link>
                </Button> */}
            </FooterTab>
        </Footer>
    )
}

export default FooterButtons