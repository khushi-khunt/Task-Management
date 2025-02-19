import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        Login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    }
})

export const authActions = authSlice.actions;//dispatch
export default authSlice.reducer;