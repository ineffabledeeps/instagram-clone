import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../../features/postSlice';
import userReducer from '../../features/userSlice';

export default configureStore({
    reducer:{
        post: postReducer,
        user: userReducer
    }
})