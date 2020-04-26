import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BillList from './src/components/BillList'

export default function App() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Bill Tracker!</Text>
      </View>
      <BillList />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40
  },
  header: {
    fontSize: 36,
    fontWeight: "200"
  }
})
