import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//making a read  onlu object
const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
})


//Thunks 
//its a term which means work which may be delayed
//from a thunk we need to return a function 
//normal flow 

// export const fetchProducts = () => async (dispatch) => {

//     dispatch(setStatus(STATUSES.LOADING));

//     try {

//         const res = await fetch("https://fakestoreapi.com/products");
//         const products = await res.json();

//         dispatch(setProducts(products));
//         dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//         console.log(err);
//         dispatch(setStatus(STATUSES.ERROR));

//     }
// }

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return products;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        status: STATUSES.IDLE,

    },

    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    },extraReducers:{

        [fetchProducts.pending]:(state,action)=>{
            state.status=STATUSES.LOADING;
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            
            state.products=action.payload;
            state.status=STATUSES.IDLE;

            
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.status=STATUSES.ERROR;

        }
    }
});


export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;


