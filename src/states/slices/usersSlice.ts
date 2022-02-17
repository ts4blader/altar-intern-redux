import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {addUserFirebase, removeUserFirebase} from "../../firebase/utils"

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
            try{
                addUserFirebase(action.payload);
                state.push(action.payload);
            } catch(err){
                console.log(err)
            }
        },
        removeUser: (state, action: PayloadAction<number>) => {
            try{
                removeUserFirebase(action.payload);
                return state.filter(item => item.id !== action.payload);
            }catch(err){
                console.log(err);
            }
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            return action.payload
        },
    }
})

export const {addUser, removeUser, setUsers} = usersSlice.actions
export const selectUsers = (state: RootState) => state.users
export default usersSlice.reducer