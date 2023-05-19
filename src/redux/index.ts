import {combineReducers, configureStore, createSlice, createStore} from "@reduxjs/toolkit";
import activeChatSlice from "./activeChatSlice";
import activeTestSlice from "./activeTestSlice";


const rootReducer = combineReducers({
    activeChat: activeChatSlice,
    activeTest: activeTestSlice,
})

export const store = configureStore({
    reducer: rootReducer
    }
)
