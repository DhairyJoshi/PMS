import { createSlice } from "@reduxjs/toolkit";
import { decodeBase64 } from "../decodeBase64";
import Cookies from "js-cookie";
import { admin_login, user_login } from "../api";

const initialState = {
    user: null,
    userRole: null,
    error: null,
};

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
            state.userRole = null;
            state.error = null;
        }
    },
});

// Async action creator for fetching data (axios version)
export const fetchUserData = (email, password, desiredRole) => async (dispatch) => {
    try {
        const loginType = desiredRole === "Admin" ? admin_login : user_login;
        const response = await loginType(email, password);

        const decodedData = decodeBase64(response.data);
        dispatch(setUserData(decodedData));
        dispatch(setUserRole(decodedData?.data?.userrole?.rolename));
        Cookies.set('userRole', decodedData?.data?.userrole?.rolename);
    } catch (error) {
        dispatch(setError(error.message || error.toString()));
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.clear();
    sessionStorage.clear();
    Cookies.remove('userRole');
    dispatch(logout());
};

// Export actions
export const { setUserData, setUserRole, setError, logout } = loginSlice.actions;
export default loginSlice.reducer;