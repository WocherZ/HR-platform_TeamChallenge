import {createSlice} from "@reduxjs/toolkit";

const citiesSlice = createSlice({
    name: "cities",
    initialState: {
        values: []
    },
    reducers: {
        setCities(state, action) {
            state = {...action.payload}
        }
    }
})

export {}