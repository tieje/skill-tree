import { combineReducers, createSlice } from "@reduxjs/toolkit";
import SideBar from "./SideBar";


const CheckBoxesSlice = createSlice({
    name: 'checkboxes',
    initialState: {
        verbal: true,
        quantitative: true,
    },
    reducers: {
        changeVerbalToTrue: state => {
            state.verbal = true
        },
        changeQuantitativeToTrue: state => {
            state.quantitative = true
        },
        changeVerbalToFalse: state => {
            state.verbal = false
        },
        changeQuantitativeToFalse: state => {
            state.quantitative = false
        }
    }
})

const SideBarReducer = combineReducers({
    checkboxes: CheckBoxesSlice.reducer,
})

export const { changeVerbalToTrue, changeQuantitativeToTrue, changeVerbalToFalse, changeQuantitativeToFalse } = CheckBoxesSlice.actions
export default SideBarReducer
