import { combineReducers, createSlice } from "@reduxjs/toolkit";

const CheckBoxesSlice = createSlice({
    name: 'checkboxes',
    initialState: {
        verbal: true,
        quantitative: true,
    },
    reducers: {
        changeVerbalBool: state => {
            switch (state.verbal) {
                case true:
                    state.verbal = false
                    break;
                default:
                    state.verbal = true
            }
        },
        changeQuantitativeBool: state => {
            switch (state.quantitative) {
                case true:
                    state.quantitative = false
                    break;
                default:
                    state.quantitative = true
            }
        },
    }
})

const SideBarReducer = combineReducers({
    checkboxes: CheckBoxesSlice.reducer,
})

export const { changeQuantitativeBool, changeVerbalBool } = CheckBoxesSlice.actions
export default SideBarReducer
