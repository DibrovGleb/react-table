export default interface products {
    id: number
    name: string
    supplier_email: string
    count: number
    price: number
    delivery?:{
        country: {
            id: number
            name: string
            city: string
        }
    }
}