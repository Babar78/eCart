import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:8000';

interface AuthState {
    authLoading: boolean;
    isAuthenticated: boolean;
    _id: string;
    username: string;
    email: string;
    country: string;
    address: string;
    role: Array<string>;
    phone: string;
    cnic: string;
    profilePictureURL: string;
}

// Define a type for the user data
interface UserData {
    email: string;
    password: string;
}

const initialState: AuthState = {
    authLoading: false,
    isAuthenticated: false,
    _id: '',
    username: '',
    email: '',
    country: '',
    address: '',
    role: [],
    phone: '',
    cnic: '',
    profilePictureURL: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            Cookies.remove('userData');
            Cookies.remove('token');
            state.isAuthenticated = false;
            state._id = '';
            state.username = '';
            state.email = '';
            state.country = '';
            state.address = '';
            state.role = [];
            state.phone = '';
            state.cnic = '';
            state.profilePictureURL = '';
        },
        fillSavedData: (state, action) => {
            const userData = JSON.parse(action.payload);
            if (userData) {
                state.isAuthenticated = true;
                state._id = userData._id;
                state.username = userData.username;
                state.email = userData.email;
                state.country = userData.country;
                state.address = userData.address;
                state.role = userData.role;
                state.phone = userData.phone;
                state.cnic = userData.cnic;
                state.profilePictureURL = userData.profilePictureURL;
            }
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state, action) => {
            state.authLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            Cookies.set('userData', JSON.stringify(action.payload), { expires: 1 });
            state.authLoading = false;
            state.isAuthenticated = true;
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.country = action.payload.country;
            state.address = action.payload.address;
            state.role = action.payload.role;
            state.phone = action.payload.phone;
            state.cnic = action.payload.cnic;
            state.profilePictureURL = action.payload.profilePictureURL;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.authLoading = false;
        })

        //signup
        builder.addCase(signup.pending, (state, action) => {
            console.log('signup pending');

            state.authLoading = true;
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log('signup fulfilled');
            console.log(action.payload);
            Cookies.set('userData', JSON.stringify(action.payload), { expires: 1 });
            state.authLoading = false;
            state.isAuthenticated = true;
            console.log("state: ", state.isAuthenticated);
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.country = action.payload.country;
            state.address = action.payload.address;
            state.role = action.payload.role;
            state.phone = action.payload.phone;
            state.cnic = action.payload.cnic;
            state.profilePictureURL = action.payload.profilePictureURL;
        })
        builder.addCase(signup.rejected, (state, action) => {
            state.authLoading = false;
        })
    }
})

export const login = createAsyncThunk('auth/login', async (userData: UserData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/login`, userData, {
            withCredentials: true
        });

        if (response.data.message !== "User Authenticated!") {
            console.log(response.data.message);
        }

        return response.data.userData;
    }
    catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const signup = createAsyncThunk('auth/signup', async (userData: UserData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/signup`, userData, {
            withCredentials: true
        });

        if (response.status !== 201) {
            console.log(response.data.message);
        }

        return response.data.userData;
    }
    catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});


export const { logout, fillSavedData } = authSlice.actions

export const isAuthenticated = (state: any) => state.auth.isAuthenticated;

export default authSlice.reducer