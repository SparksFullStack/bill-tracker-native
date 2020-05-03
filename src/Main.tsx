import React from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Card } from 'native-base'
import FooterButtons from './components/FooterButtons';
import { NavigatorMap } from './constants';
import BillList from './components/BillList';

export default class Main extends React.Component<{ navigation: any }> {
  state = {
    isReady: false,
    activeTab: NavigatorMap.CALENDAR
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  updateActiveTab = (newActiveTab: NavigatorMap) => this.setState({ activeTab: newActiveTab })

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
        <View style={styles.view}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Bill Tracker!</Text>
            </View>
            <BillList />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 30,
    height: '100%'
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40
  },
  header: {
    fontSize: 36,
    fontWeight: "200"
  }
})
