import { createAction } from '@reduxjs/toolkit';

export const setCountry = createAction('hotel/destination', (country) => ({
    payload : country
}));




