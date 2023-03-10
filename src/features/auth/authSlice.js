import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../../firebase_init';

const initialState = {
    user: {
        name: "",
        email: "",
        imgUrl: null,
        role: "",

    },
    isLoading: false,
    isError: false,
    error: "",
}

export const createUser = createAsyncThunk(
    "auth/createUser",
    async ({ email, password, firstName, lastName }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        const updatedUser = await updateProfile(data.user, {
            displayName: firstName + " " + lastName,
        })
        return data;
    }
);
export const getUser = createAsyncThunk(
    "auth/getUser",
    async ({ email, name = "", url = "" }) => {
        const res = await fetch(`http://localhost:5000/auth/manage/get-user/${email}`)
        const data = await res.json()
        if (data.status === 'success') {
            return data
        } else {
            return { email, name, url }
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }) => {
        const data = await signInWithEmailAndPassword(auth, email, password)
        return data;
    }
);



export const googleLoginUser = createAsyncThunk(
    "auth/googleLoginUser",
    async () => {
        const googleProvider = new GoogleAuthProvider()
        const data = await signInWithPopup(auth, googleProvider)
        return data;
    }
);

export const removeUser = createAsyncThunk(
    "auth/removeUser",
    async () => {
        await signOut(auth);
    }
);

/* 
 =========== Auth Slice ============
 ................................... 
  */

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user.email = payload.email
            state.user.name = payload.displayName
            state.user.imgUrl = payload?.photoURL
        },
        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        },

    },
    extraReducers: builder => {
        builder.addCase(createUser.pending, state => {
            state.isLoading = true
            state.isError = false
            state.error = ""
        })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.error = ""
                state.user.email = action.payload.user.email
                state.user.name = action.payload.user.displayName
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })
            .addCase(loginUser.pending, state => {
                state.isLoading = false
                state.isError = false
                state.error = ""
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isError = false
                state.error = ""
                state.user.email = payload.user.email
                state.user.name = payload.user.displayName
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })
            .addCase(googleLoginUser.pending, state => {
                state.isLoading = true
                state.isError = false
                state.error = ""
            })
            .addCase(googleLoginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isError = false
                state.error = ""
                state.user.email = payload.user.email
                state.user.name = payload.user.displayName
                state.user.imgUrl = payload.user.photoURL
            })
            .addCase(googleLoginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })
            .addCase(removeUser.pending, state => {
                state.isLoading = true
                state.isError = false
                state.error = ""
            })
            .addCase(removeUser.fulfilled, (state) => {
                state.isLoading = false
                state.isError = false
                state.error = ""
                state.user.email = ""
                state.user.name = ""
                state.user.imgUrl = ""
            })
            .addCase(removeUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })
            .addCase(getUser.pending, state => {
                state.isLoading = true
                state.isError = false
                state.error = ""
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isError = false
                state.error = ""
                if (payload.status === 'success') {
                    state.user = payload.data
                } else {
                    state.user.email = payload.email;
                    state.user.name = payload.name
                    state.user.imgUrl = payload?.url
                }
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message
            })

    }


})

export const { setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;