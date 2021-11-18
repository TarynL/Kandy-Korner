import React from "react"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"


export const KandyKorner = () => {


    return (
        <>
            <h1>Kandy Korner</h1>
            <h2>Location List</h2>
            <LocationList />
            <h2>Product List</h2>
            <ProductList />


        </>
    )
}
