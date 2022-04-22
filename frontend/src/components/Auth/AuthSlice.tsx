import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { INITIAL_AUTH_STATE } from "../../Variables/StaticVariables";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_AUTH_STATE,
    reducers: {
        setCredentials: (
            state,
            { payload: { key, user_id } }: PayloadAction<{ key: string, user_id: number }>) => {
            state.token = key
            state.user_id = user_id
        },
        RemoveCredentials: state => {
            state.token = null
            state.user_id = null
        },
    },
})

export const { setCredentials, RemoveCredentials } = AuthSlice.actions
export default AuthSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user_id
