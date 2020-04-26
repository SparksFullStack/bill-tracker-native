import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
import axios from 'axios'
import { SERVER_BASE_URL, IBill, LOCAL_BASE_URL } from '../constants'
import { Agenda, Calendar, DateObject } from 'react-native-calendars'
import { Container, Content, FooterTab, Footer, Button } from 'native-base'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
    billList: {
        // width: '55%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // marginTop: 20
    }
})

interface BillCalendarState {
    bills: IBill[],
    isCreateBillModalOpen: boolean
}

class BillCalendar extends React.Component<{}, BillCalendarState> {
    state = {
        bills: [],
        isCreateBillModalOpen: true
    }
    componentDidMount() {
        this.getAllBills()
    }

    getAllBills = async () => {
        const { data: bills } = await axios.get(LOCAL_BASE_URL)
        this.setState({ bills })
    }

    handleDayPress = (day: DateObject) => {
        // TODO: Fetch all bills for that date
    }

    render() {
        return (
            <View style={styles.billList}>
                <Calendar 
                    onDayPress={this.handleDayPress}
                />
            </View>
        )
    }
}

export default BillCalendar