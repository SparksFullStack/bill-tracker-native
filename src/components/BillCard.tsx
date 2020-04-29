import React from 'react'
import { Text, StyleSheet, Alert } from 'react-native'
import { IBill, SERVER_BASE_URL } from '../constants'
import { Card, Content, Container, CardItem, Button, Text as NativeBaseText } from 'native-base'
import moment from 'moment'
import Axios from 'axios'

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    header: {
        justifyContent: 'center'
    },
    prefaceText: {
        fontWeight: 'bold'
    },
    subjectText: {
        marginLeft: 10
    },
    card: {
        marginTop: 15
    },
    cardItem: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
})

type BillCardProps = {
    bill: IBill,
    handleDelete: (billId: string) => void
}

const BillCard = ({ bill, handleDelete }: BillCardProps) => {
    const dueDate =  moment(bill.dueDate).format('MM/DD/YYYY')

    return (
        <Card style={styles.card}>
            <CardItem style={styles.header} header bordered>
                <Text>{bill.name}</Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
                <Text>{dueDate}</Text>
                <Text>${bill.totalAmount}</Text>
            </CardItem>
            <CardItem footer>
                {/* TODO: Wire up */}
                <Button onPress={() => handleDelete(bill._id)}>
                    <NativeBaseText>Delete</NativeBaseText>
                </Button>
            </CardItem>
        </Card> 
    )
}

export default BillCard