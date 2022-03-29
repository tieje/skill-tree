import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PanModeSliceReducer from '../components/PanZoomHexGrid/PanModeSlices'
import SideBarReducer from '../components/SideBar/SideBarSlices';

export const store = configureStore({
    reducer: {
        panMode: PanModeSliceReducer,
        sideBar: SideBarReducer,
    },
    devTools: true
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
