import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userRole: null,
    error: null,
};

const url = 'http://122.170.109.73:7575/api/'

// Create slice
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload;
        },
        setUserType: (state, action) => {
            state.userRole = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.userType = null;
            state.error = null;
        }
    },
});

// Async action creator for fetching data
export const fetchUserData = (email, password) => async (dispatch) => {
    try {
        const response = await fetch(`${url}admin_login/`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
             },
            body: JSON.stringify({
                email:email,
                password:password
            }),
        });
        const data = await response.json();
        // console.log(data.data.userrole.rolename);
        dispatch(setUserData(data));
        dispatch(setUserType(data?.data?.userrole?.rolename));
    } catch (error) {
        dispatch(setError(error.toString()));
    }
};

export const logoutUser = () => (dispatch) => {
    // localStorage.removeItem('localToken');
    // sessionStorage.removeItem('sessionToken');
    // localStorage.removeItem('userRole');
    localStorage.clear();
    sessionStorage.clear();
    dispatch(logout());
};

// Export actions
export const { setUserData, setUserType, setError, logout } = loginSlice.actions;
export default loginSlice.reducer;