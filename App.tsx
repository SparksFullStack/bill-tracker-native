import React from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import BillCalendar from './src/components/BillCalendar'
import FooterButtons from './src/components/FooterButtons'

import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content } from 'native-base'
import { ActiveTab } from './src/constants'

export default class App extends React.Component {
  state = {
    isReady: false,
    activeTab: ActiveTab.CALENDAR
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  updateActiveTab = (newActiveTab: ActiveTab) => this.setState({ activeTab: newActiveTab })

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NativeRouter>
        <Container>
          <Content>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Bill Tracker!</Text>
            </View>
            <Route exact path='/'>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>Welcome to bill tracker!</Text>    
              </View>
            </Route>
            <Route path='/calendar'>
              <BillCalendar />
            </Route>
          </Content>

          <FooterButtons 
            activeTab={this.state.activeTab} 
            updateActiveTab={this.updateActiveTab}  
          />
        </Container>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 80
  },
  header: {
    fontSize: 36,
    fontWeight: "200"
  }
})

AppRegistry.registerComponent('BillTracker', () => App);
