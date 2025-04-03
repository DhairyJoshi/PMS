import { createSlice } from "@reduxjs/toolkit";
import { decodeBase64 } from "../decodeBase64";
import Cookies from "js-cookie";

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
        setUserRole: (state, action) => {
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
export const fetchUserData = (email, password, desiredRole) => async (dispatch) => {
    try {
        const endpoint = desiredRole === "Admin" ? "admin_login/" : "user_login/";
        const response = await fetch(`${url}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });
        const data = await response.json();
        const decodedData = decodeBase64(data);
        dispatch(setUserData(decodedData));
        dispatch(setUserRole(decodedData?.data?.userrole?.rolename));
        Cookies.set('userRole', decodedData?.data?.userrole?.rolename);
        // dispatch(setUserRole('Employee'));
        // Cookies.set('userRole', 'decodedData?.data?.userrole?.rolename');
    } catch (error) {
        dispatch(setError(error.toString()));
    }
};

// export const fetchUserData = (username, password) => async (dispatch) => {
//     try {
//         const response = await fetch('https://dummyjson.com/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             }),
//         });
//         const data = await response.json();
//         dispatch(setUserData(data));
//         dispatch(setUserRole('Admin'));
//     } catch (error) {
//         dispatch(setError(error.toString()));
//     }
// };

export const logoutUser = () => (dispatch) => {
    localStorage.clear();
    sessionStorage.clear();
    Cookies.remove('userRole');
    dispatch(logout());
};

// Export actions
export const { setUserData, setUserRole, setError, logout } = loginSlice.actions;
export default loginSlice.reducer;