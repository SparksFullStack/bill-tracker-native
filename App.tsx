import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/Main'
// import BillCalendar from './src/components/BillCalendar'
import AddBill from './src/components/AddBill'
// import BillList from './src/components/BillList'

export enum NavigatorScreens {
  MAIN = 'Main',
  CALENDAR = 'Calendar',
  LIST = 'List',
  ADD_BILL = 'Add Bill'
}

export type RootStackParamList = {
  [NavigatorScreens.MAIN]: {}
  [NavigatorScreens.CALENDAR]: {}
  [NavigatorScreens.LIST]: {}
  [NavigatorScreens.ADD_BILL]: {}
}

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

const App = () => (
  <NavigationContainer>
    <Navigator tabBarOptions={{ tabStyle: { justifyContent: 'center' } }}>
      <Screen name={NavigatorScreens.MAIN} component={Main} />
      {/* <Screen name={NavigatorScreens.CALENDAR} component={BillCalendar} /> */}
      <Screen name={NavigatorScreens.ADD_BILL} component={AddBill} />
      {/* <Screen name={NavigatorScreens.LIST} component={BillList} /> */}
    </Navigator>
  </NavigationContainer>
)

export default App