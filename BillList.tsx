import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import { SERVER_BASE_URL, IBill, LOCAL_BASE_URL } from './constants'
import BillCard from './BillCard'

const styles = StyleSheet.create({
    billList: {
        // width: '55%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // marginTop: 20
    }
})

interface BillListState {
    bills: IBill[]
}

class BillList extends React.Component<{}, BillListState> {
    state = {
        bills: []
    }
    componentDidMount() {
        this.getAllBills()
    }

    getAllBills = async () => {
        const { data: bills } = await axios.get(LOCAL_BASE_URL)
        this.setState({ bills })
    }

    render() {
        return (
            <View style={styles.billList}>
                <FlatList
                    data={this.state.bills}
                    renderItem={({item: bill}) => <BillCard bill={bill} />}
                />
            </View>
        )
    }
}

export default BillList