import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import AuthReducer from '../components/Auth/AuthSlice';
import PanModeSliceReducer from '../components/PanZoomHexGrid/PanModeSlices'
import SideBarReducer from '../components/SideBar/SideBarSlices';
import TreePickerSliceReducer from '../components/TreePicker/TreePickerSlice';
import { AuthState } from '../types/Types';
import { treeApi } from './api';

const initialState = {
    auth: {
        token: localStorage.getItem('TOKEN'),
        user_id: localStorage.getItem('USER_ID')
    } as AuthState,
}

export const store = configureStore({
    reducer: {
        panMode: PanModeSliceReducer,
        sideBar: SideBarReducer,
        auth: AuthReducer,
        treePicker: TreePickerSliceReducer,
        [treeApi.reducerPath]: treeApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(treeApi.middleware),
    preloadedState: {
        ...initialState,
    },
})
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

store.subscribe(() => {
    localStorage.setItem('TOKEN', store.getState().auth.token)
    localStorage.setItem('USER_ID', store.getState().auth.user_id)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
