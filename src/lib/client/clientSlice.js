import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clients: [],
    error: null,
};

const url = 'https://dummyjson.com/users'

// Create slice
const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setClientsData: (state, action) => {
            state.clients = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Async action creator for fetching data
export const fetchClientsData = () => async (dispatch) => {
    try {
        const response = await fetch(`${url}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                },
        });
        const data = await response.json();
        dispatch(setClientsData(data));
    } catch (error) {
        dispatch(setError(error.toString()));
    }
};

// Export actions
export const { setClientsData, setError } = clientSlice.actions;
export default clientSlice.reducer;