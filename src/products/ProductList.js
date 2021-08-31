import React, { useEffect, useState } from 'react';

export const ProductList = () => {
    const [products, setProducts] = useState([])

    
    useEffect( () => {
        fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
        .then(res => res.json())
        .then(
            (productData) => {
                setProducts(productData)
            }
    )},
    []
    )

    useEffect(
        () =>{
            console.log("products state changed", products)
        },
        [products]
    )


    return(
        <>
            {products.map((product) => {
                return <div key={`product--${product.id}`}>
                <p>{product.name}</p>
                <p>Type: {product.productType.name}</p>
                <p>Price: {product.price}</p>
                </div>
            })}
        </>
    )
}