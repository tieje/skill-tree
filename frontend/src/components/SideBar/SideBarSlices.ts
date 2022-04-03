import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        verbal: true,
        quantitative: true,
        editImgAddress: false,
        editNoteTitle: false,
        editNoteBody: false
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
        ImgAddressSwitch: state => {
            switch (state.editImgAddress) {
                case true:
                    state.editImgAddress = false
                    break;
                default:
                    state.editImgAddress = true
                    state.editNoteTitle = false
                    state.editNoteBody = false
            }
        },
        NoteTitleSwitch: state => {
            switch (state.editNoteTitle) {
                case true:
                    state.editNoteTitle = false
                    break;
                default:
                    state.editNoteTitle = true
                    state.editImgAddress = false
                    state.editNoteBody = false
            }
        },
        NoteBodySwitch: state => {
            switch (state.editNoteBody) {
                case true:
                    state.editNoteBody = false
                    break;
                default:
                    state.editNoteBody = true
                    state.editNoteTitle = false
                    state.editImgAddress = false
            }
        },
    }
})

export const {
    changeQuantitativeBool,
    changeVerbalBool,
    ImgAddressSwitch,
    NoteTitleSwitch,
    NoteBodySwitch,
} = SideBarSlice.actions
export default SideBarSlice.reducer
