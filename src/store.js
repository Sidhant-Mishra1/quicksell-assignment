import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './Reducers/DataReducer';
//start
const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;