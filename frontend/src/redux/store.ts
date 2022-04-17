import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import AuthReducer from '../components/Auth/AuthSlice';
import PanModeSliceReducer from '../components/PanZoomHexGrid/PanModeSlices'
import SideBarReducer from '../components/SideBar/SideBarSlices';
import { treeApi } from './api';

const initialState = {
    auth: {
        user: null,
        token: localStorage.getItem('TOKEN'),
    }
}

export const store = configureStore({
    reducer: {
        panMode: PanModeSliceReducer,
        sideBar: SideBarReducer,
        auth: AuthReducer,
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
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
