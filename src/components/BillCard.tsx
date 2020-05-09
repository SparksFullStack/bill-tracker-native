import React from 'react'
import { Text, StyleSheet, Alert } from 'react-native'
import { IBill, SERVER_BASE_URL, ReadablePaymentMethods } from '../constants'
import { Card, Content, Container, CardItem, Button, Text as NativeBaseText, Left, Body, Right } from 'native-base'
import moment from 'moment'
import Axios from 'axios'
import { reverseEnumMapper } from '../utils'

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
        marginTop: 15,
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
    // const dueDate =  moment(bill.dueDate).format('MM/DD/YYYY')
    const dueDate = `${bill.dueDate}st`
    const totalAmount = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(bill.totalAmount)
    const paymentMethod = ReadablePaymentMethods[bill.paymentMethod]

    return (
        <Card style={styles.card}>
            <CardItem style={styles.header} header bordered>
                <Text>{bill.name}</Text>
            </CardItem>
            <CardItem>
                <Left>
                    <Body>
                        <Text>
                            <Text style={styles.prefaceText}>Amount: </Text>
                            {totalAmount}
                        </Text>
                    </Body>
                </Left>
                <Right>
                    <Body>
                        <Text>
                            <Text style={styles.prefaceText}>Due: </Text>
                            {dueDate}
                        </Text>
                    </Body>
                </Right>
            </CardItem>
            <CardItem>
                <Left>
                    <Body>
                        <Text>
                            <Text style={styles.prefaceText}>Company: </Text>
                            {bill.company}
                        </Text>
                    </Body>
                </Left>
                <Right>
                    <Body>
                        <Text>
                            <Text style={styles.prefaceText}>Method: </Text>
                            {paymentMethod}
                        </Text>
                    </Body>
                </Right>
            </CardItem>
            <CardItem footer>
                <Button onPress={() => handleDelete(bill._id)}>
                    <NativeBaseText>Delete</NativeBaseText>
                </Button>
            </CardItem>
        </Card> 
    )
}

export default BillCard