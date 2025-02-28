import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  dummyData: null,
  loading: false,
  error: null,
};

// Create slice
const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setData: (state, action) => {
      state.dummyData = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Async action creator for fetching data
export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};

// Export actions
export const { setLoading, setData, setError } = dummySlice.actions;
export default dummySlice.reducer;