import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type User = {
    id: number
    name: string
    email: string
}

const initialState : User[] = []

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        removeUser: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload)
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            return action.payload
        },
    }
})

export const {addUser, removeUser, setUsers} = usersSlice.actions
export const selectUsers = (state: RootState) => state.users
export default usersSlice.reducer