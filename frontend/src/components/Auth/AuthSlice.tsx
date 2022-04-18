import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { INITIAL_AUTH_STATE } from "../../StaticVariables";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_AUTH_STATE,
    reducers: {
        setCredentials: (
            state,
            { payload: { key } }: PayloadAction<{ key: string }>) => {
            state.token = key
        },
        RemoveCredentials: state => {
            state.token = null
        },
    },
})

export const { setCredentials, RemoveCredentials } = AuthSlice.actions
export default AuthSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user
