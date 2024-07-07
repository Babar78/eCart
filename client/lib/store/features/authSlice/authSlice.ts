import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

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
            state.isAuthenticated = false;
            // state._id = '';
            state.username = '';
            state.email = '';
            state.country = '';
            state.address = '';
            state.role = [];
            state.phone = '';
            state.cnic = '';
            state.profilePictureURL = '';
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state, action) => {
            state.authLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
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
        builder.addCase(login.rejected, (state, action: any) => {
            console.log(action.payload.message);
            state.authLoading = false;
        })
    }
})

export const login = createAsyncThunk('auth/login', async (userData: UserData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/login`, userData, {
            withCredentials: true
        });
        // cookies().set('name', 'value')

        if (response.data.message !== "User Authenticated!") {
            console.log(response.data.message);
        }
        console.log(response.data.userData);

        return response.data.userData;
    }
    catch (error: any) {
        return rejectWithValue(error.response.data);
    }
})


export const { logout } = authSlice.actions

export const isAuthenticated = (state: any) => state.auth.isAuthenticated;

export default authSlice.reducer