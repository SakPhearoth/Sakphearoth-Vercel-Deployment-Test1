import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { productsApi } from "./services/product/productsApi"
import cartReducer from "./features/cart/cartSlice"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], // only persist the cart slice
}

const rootReducer = combineReducers({
    // define your reducers here
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
   
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck: false}).concat(
            productsApi.middleware, // add the productsApi middleware
        ),
})

export const persistor = persistStore(store)
// These types help TypeScript understand our store structure
export type RootState = ReturnType<typeof store.getState> // What our store looks like
export type AppDispatch = typeof store.dispatch // How we send actions to store
