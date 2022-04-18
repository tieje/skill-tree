import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_SIDEBAR_STATE } from "../../StaticVariables";

const SideBarSlice = createSlice({
    name: 'sidebar',
    initialState: INITIAL_SIDEBAR_STATE,
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
        ChangeImgAddress: (state, action) => {
            state.imgAddress = action.payload
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
        ChangeNoteTitle: (state, action) => {
            state.noteTitle = action.payload
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
        ChangeNoteBody: (state, action) => {
            state.noteBody = action.payload
        },
        ResetSidebarState: state => {
            state = INITIAL_SIDEBAR_STATE
        },
    }
})

export const {
    changeQuantitativeBool,
    changeVerbalBool,
    ImgAddressSwitch,
    NoteTitleSwitch,
    NoteBodySwitch,
    ChangeImgAddress,
    ChangeNoteTitle,
    ChangeNoteBody,
    ResetSidebarState,
} = SideBarSlice.actions
export default SideBarSlice.reducer
