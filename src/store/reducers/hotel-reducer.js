import { createReducer } from "@reduxjs/toolkit";
import { setCountry } from "../actions/hotel-action";


const initialState = {
    country : '',
    idHotel : ''
}

const hotelReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setCountry, (state, action) => {
            state.country = action.payload;
        })
});

export default hotelReducer;