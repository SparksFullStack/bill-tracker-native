import React from 'react'
import axios from 'axios'
import { StyleSheet, Alert, Keyboard } from 'react-native'
import { Header, Container, Content, Form, Item, Input, View, Text, Body, Title, Button, Picker } from 'native-base'
import { SERVER_BASE_URL, NavigatorScreens, PaymentMethods, ReadablePaymentMethods } from '../constants'

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
    picker: {
        marginRight: 15,
        paddingLeft: 0
    },
    button: {
        margin: 15,
        justifyContent: 'center'
    }
})


const AddBill = ({ navigation, route }: any) => {
    const [name, setName] = React.useState<string>()
    const [company, setCompany] = React.useState<string>()
    const [dueDate, setDueDate] = React.useState<string>()
    const [totalAmount, setTotalAmount] = React.useState<string>()
    const [paymentMethod, setPaymentMethod] = React.useState<PaymentMethods>(PaymentMethods.AUTO_WITHDRAWAL)

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

        const response = await axios.post(`${SERVER_BASE_URL}/add-bill`, serverPayload)
        console.log('response', response)
        Keyboard.dismiss()
        Alert.alert("Saved!")
        
        setName('')
        setCompany('')
        setDueDate('')
        setTotalAmount('')
        setPaymentMethod(PaymentMethods.AUTO_WITHDRAWAL)
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
                        <Input keyboardType='number-pad' onChangeText={(text) => setTotalAmount(text)} placeholder="Total Amount" />
                    </Item>
                    <Item style={styles.picker}>
                        <Picker
                            note
                            mode='dropdown'
                            selectedValue={paymentMethod}
                            onValueChange={(newValue) => setPaymentMethod(newValue)}
                            placeholder="Add a Payment Method"
                        >
                            <Picker.Item label="Auto Withdrawal" value={PaymentMethods.AUTO_WITHDRAWAL} />
                            <Picker.Item label="Online" value={PaymentMethods.ONLINE} />
                            <Picker.Item label="Set Aside" value={PaymentMethods.SET_ASIDE} />
                            <Picker.Item label="Transfer" value={PaymentMethods.TRANSFER} />
                        </Picker>
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