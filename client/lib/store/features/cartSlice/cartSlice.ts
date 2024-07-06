import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CartState {
    value: number
}

// Define the initial state using that type
const initialState: CartState = {
    value: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state) => {
            state.value += 1
        },
    },
})

export const { add } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.value

export default cartSlice.reducer