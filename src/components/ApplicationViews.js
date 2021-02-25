import React from "react"
import { Route } from "react-router-dom"
import "./KandyKorner.css"
import { LocationCard } from "./location/LocationCard"
import { ProductCard } from "./product/ProductCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the employee list when http://localhost:3000/products */}
            <Route path="/products">
                <ProductCard />
            </Route>
        </>
    )
}