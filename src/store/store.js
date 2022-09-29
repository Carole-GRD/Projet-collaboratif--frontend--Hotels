import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth-reducer';
import hotelReducer from './reducers/hotel-reducer';


const store = configureStore({
    reducer: {
        auth: authReducer,
        hotels: hotelReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
    // ↑ précise la variable d'environnement ->  dev  
});

export default store;