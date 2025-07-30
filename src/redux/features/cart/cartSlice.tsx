import { Product } from "@/types/product"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type CartItems = {
    id: number
    title: string
    price: number
    image: string
    quantity: number
}

type CartState = {
    items: CartItems[]
    total: number
    itemsCount: number
}

const initialState: CartState = {
    items: [],
    total: 0,
    itemsCount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload
            const existingItem = state.items.find((item) => item.id === product.id)

            if (existingItem) {
                existingItem.quantity += 1 // quantity = quantity +1
            } else {
                state.items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.images[0] || "/placeholder.svg",
                    quantity: 1,
                })
            }
            cartSlice.caseReducers.calculateTotals(state)
        },
        calculateTotals: (state) => {
            state.itemsCount = state.items.reduce((total, item) => total + item.quantity, 0)
            state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer