import React from 'react'
import { StyleSheet, Alert, Keyboard } from 'react-native'
import { Header, Container, Content, Form, Item, Input, View, Text, Body, Title, Button } from 'native-base'
import axios from 'axios'
import { SERVER_BASE_URL } from '../constants'
import { NavigatorScreens } from '../../App'

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    header: {
        justifyContent: 'center'
    },
    item: {
        marginRight: 15
    },
    button: {
        margin: 15
    }
})


const AddBill = ({ navigation, route }: any) => {
    const [name, setName] = React.useState<string>()
    const [company, setCompany] = React.useState<string>()
    const [dueDate, setDueDate] = React.useState<string>()
    const [totalAmount, setTotalAmount] = React.useState<string>()
    const [paymentMethod, setPaymentMethod] = React.useState<string>()

    const handleAddBill = async () => {
        const serverPayload = {
            data: {
                name,
                company,
                dueDate,
                totalAmount,
                paymentMethod
            }
        }

        await axios.post(`${SERVER_BASE_URL}/add-bill`, serverPayload)
        Keyboard.dismiss()
        Alert.alert("Saved!")
        
        setName('')
        setCompany('')
        setDueDate('')
        setTotalAmount('')
        setPaymentMethod('')
        navigation.navigate(NavigatorScreens.MAIN)
    }

    return (
        <Container>
            <Header style={styles.header}>
                <Body>
                    <Title>Add a Bill</Title>
                </Body>
            </Header>
            <Content>
                <Form style={styles.form}>
                    <Item style={styles.item}>
                        <Input onChangeText={(text) => setName(text)} placeholder="Name" />
                    </Item>
                    <Item style={styles.item}>
                        <Input onChangeText={(text) => setCompany(text)} placeholder="Company" />
                    </Item>
                    <Item style={styles.item}>
                        <Input onChangeText={(text) => setDueDate(text)} placeholder="Due Date" />
                    </Item>
                    <Item style={styles.item}>
                        <Input onChangeText={(text) => setTotalAmount(text)} placeholder="Total Amount" />
                    </Item>
                    <Item style={styles.item}>
                        <Input onChangeText={(text) => setPaymentMethod(text)} placeholder="Payment Method" />
                    </Item>
                    <Button onPress={handleAddBill} style={styles.button}>
                        <Text>Submit</Text>
                    </Button>
                </Form>
            </Content>
      </Container>
    )
}

export default AddBill