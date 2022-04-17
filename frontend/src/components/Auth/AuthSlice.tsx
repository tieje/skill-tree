import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { AuthState } from "../../types/Types";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null
    } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { key } }: PayloadAction<{ key: string }>) => {
            state.token = key
        },
        RemoveCredentials: state => {
            state.token = null
        }
    },
})

export const { setCredentials, RemoveCredentials } = AuthSlice.actions
export default AuthSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user
