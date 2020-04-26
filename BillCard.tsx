import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { IBill } from './constants'
import { Card } from 'react-native-elements'

const styles = StyleSheet.create({
    prefaceText: {
        fontWeight: 'bold'
    },
    subjectText: {
        marginLeft: '10px'
    }
})

type BillCardProps = {
    bill: IBill
}

const BillCard = ({ bill }: BillCardProps) => {
    const formatDate = () => {
        const newDate = new Date(bill.dueDate)
        console.log('dates', newDate, bill.dueDate)
        console.log('month', newDate.getMonth(), newDate.getUTCMonth())
        return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`
    }


    return (
       <Card
        title={bill.name}
       >
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