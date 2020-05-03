import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
import axios from 'axios'
import { SERVER_BASE_URL, IBill, LOCAL_BASE_URL } from '../constants'
import BillCard from './BillCard'
import Axios from 'axios'

const styles = StyleSheet.create({
    billList: {
        width: '90%',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    }
})

interface BillListState {
    bills: IBill[]
}

let timeout: any

class BillList extends React.Component<{}, BillListState> {
    _isMounted = false

    state = {
        bills: []
    }
    componentDidMount() {
        this._isMounted = true
        this.getAllBills()
    }

    getAllBills = async () => {
        const { data: bills } = await axios.get(SERVER_BASE_URL)
        this.setState({ bills })
    }

    handleDelete = async (billId: string) => {
        await Axios.delete(`${SERVER_BASE_URL}/${billId}`)
        Alert.alert('deleted!')
        this.getAllBills()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        return (
            <FlatList
                style={styles.billList}
                data={this.state.bills}
                renderItem={({item: bill}) => <BillCard handleDelete={this.handleDelete} bill={bill} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

export default BillList