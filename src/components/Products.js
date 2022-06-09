import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add } from '../reduxStore/cartSlice';
import { fetchProducts } from '../reduxStore/ProductSlice';
const Products = () => {

    const dispatch = useDispatch();
    const { products, status } = useSelector(state => state.product);
    useEffect(() => {

        dispatch(fetchProducts());
    }, []);



    const handleAdd = (product) => {
        dispatch(add(product));

    }


    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() => handleAdd(product)}>
                        Add To Cart
                    </button>
                </div>
            ))
            }
        </div >
    )
}

export default Products