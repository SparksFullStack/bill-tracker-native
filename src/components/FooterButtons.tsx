import React from 'react'
import { Text, FooterTab, Footer, Button } from 'native-base'
import { NavigatorMap } from '../constants'

type FooterButtonsProps = {
    activeTab?: NavigatorMap
    updateActiveTab?: (newActiveTab: NavigatorMap) => void
    navigate: (path: NavigatorMap | string) => void
}

const FooterButtons = ({ activeTab, updateActiveTab, navigate }: FooterButtonsProps) => {
    console.log('navigate', navigate)
    return (
        <Footer>
            <FooterTab>
                <Button 
                    onPress={() => navigate(NavigatorMap.HOME)} 
                    // active={activeTab === NavigatorMap.CALENDAR}
                >
                    <Text>{NavigatorMap.HOME}</Text>
                </Button>
                <Button 
                    onPress={() => navigate(NavigatorMap.CALENDAR)} 
                    // active={activeTab === NavigatorMap.CALENDAR}
                >
                    <Text>{NavigatorMap.CALENDAR}</Text>
                </Button>
                <Button 
                    onPress={() => navigate(NavigatorMap.LIST)} 
                    // active={activeTab === NavigatorMap.LIST}
                >
                    <Text>{NavigatorMap.LIST}</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default FooterButtons