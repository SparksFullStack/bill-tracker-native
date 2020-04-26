import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { IBill } from '../constants'
import { Card } from 'native-base'
import moment from 'moment'

const styles = StyleSheet.create({
    prefaceText: {
        fontWeight: 'bold'
    },
    subjectText: {
        marginLeft: 10
    }
})

type BillCardProps = {
    bill: IBill
}

const BillCard = ({ bill }: BillCardProps) => {
    const formatDate = () => moment(bill.dueDate).format('MM/DD/YYYY')

    return (
       <Card>
           <Text>
               <Text style={styles.prefaceText}>Amount: </Text>
               <Text style={styles.subjectText}>  ${bill.totalAmount}</Text>
            </Text>
           <Text>
               <Text style={styles.prefaceText}>Due Date: </Text>
               <Text style={styles.subjectText}>{formatDate()}</Text>
            </Text>
           <Text>
               <Text style={styles.prefaceText}>Company: </Text>
               <Text style={styles.subjectText}>{bill.company}</Text>
            </Text>
       </Card>
    )
}

export default BillCard