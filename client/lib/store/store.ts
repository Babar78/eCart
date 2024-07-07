import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice/cartSlice'
import authReducer from './features/authSlice/authSlice'

import { persistStore, persistReducer } from 'redux-persist'
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }),
    })
}

export const persistedStore = () => persistStore(makeStore());

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']