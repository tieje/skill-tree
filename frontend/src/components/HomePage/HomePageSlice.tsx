import { createSlice } from "@reduxjs/toolkit";
import { welcomeHex } from "../../Variables/HomePageState";

const HomePageSlice = createSlice({
    name: 'home',
    initialState: {
        homeHexagonFocused: welcomeHex,
    },
    reducers: {
        changeHomeHexagonFocused: (state, action) => { state.homeHexagonFocused = action.payload }
    }
})
export const {
    changeHomeHexagonFocused,
} = HomePageSlice.actions
export default HomePageSlice.reducer
