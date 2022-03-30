import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import PanModeSliceReducer from '../components/PanZoomHexGrid/PanModeSlices'
import SideBarReducer from '../components/SideBar/SideBarSlices';
import { treeApi } from './api';

export const store = configureStore({
    reducer: {
        panMode: PanModeSliceReducer,
        sideBar: SideBarReducer,
        [treeApi.reducerPath]: treeApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(treeApi.middleware)
})
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
