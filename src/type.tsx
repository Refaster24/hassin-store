export interface product {
    id: number,
    name: string,
    price: number,
    img: any,
    amount:number
}

export interface Country {
    name: string
    governoratesNames: string[]
    getGovernorateCities(governorateName:string|null):string[]
}

export interface formField {
    // contact information
    name: String,
    phoneNumber: number,
    governorate: string,
    city: string,
    street: number,
    houseNumber: number,
    floor?: number,
    apartment?:number,
    // credit card information
    cardName?: string,
    cardNumber?:number,
    cardExpirationYear?: number,
    cardExpirationMouth?: number,
    cardCvv?: number,
}