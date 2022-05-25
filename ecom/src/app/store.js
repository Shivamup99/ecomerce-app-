import { combineReducers, configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user:userReducer,cart:cartReducer})
const persistConfig = {
  key: 'root',
  storage,
  version:1
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
      }
    })
});

export let persistor = persistStore(store)
