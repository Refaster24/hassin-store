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