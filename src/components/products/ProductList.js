import React, { useState, useEffect } from "react";

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc')
                .then(res => res.json())
                .then(
                    (products) => {
                        setProducts(products)
                    }
                )
        },
        []
    )


    return (
        <>
            {
                products.map(
                    (product) => {
                        return <p key={product.id}>Product: {product.name} Type: {product.productType.type}</p>
                    }
                )
            }
        </>
    )
}