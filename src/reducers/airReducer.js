import {createSlice} from '@reduxjs/toolkit'

export  const airlineSlice =  createSlice({
    name:'Airline',
    initialState:{
        airline:[],
        isLoading:false
    },
    reducers:{
        getAirListFetch:(state) =>{
            state.isLoading = true;
        },
        getAirlinesSuccess:(state,action) =>{
           state.airline = action.payload;
           state.isLoading = false;
        },
        getAirlineFailure : (state) =>{
            state.isLoading = false
        }
    }
});

export const { getAirListFetch,getAirlinesSuccess,getAirlineFailure } = airlineSlice.actions;

export default airlineSlice.reducer;