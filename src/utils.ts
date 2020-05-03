import { ReadablePaymentMethods } from "./constants"

export const reverseEnumMapper = (enumMap: any, value: string) => {
    // console.log('value', value)
    // const keys = Object.keys(enumMap).filter(x => enumMap[x] === value)
    // const foundKey = keys.length > 0 ? enumMap[keys[0]] : null
    // console.log('foundKey', foundKey)
    // // @ts-ignore
    // return foundKey ? ReadablePaymentMethods[foundKey] : null
    console.log('value', value)
    console.log('readable value', ReadablePaymentMethods[value])

    return ReadablePaymentMethods[value]
}