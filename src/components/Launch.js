import React from 'react'
import { useParams } from 'react-router'
import shoe from '../shoe.json'
// import {Outlet} from 'react-router-dom'

export const Launch = () => {
    const { id } = useParams()
    const sho = shoe[id]
    return (
        <div>
            <h1>Product Description</h1>
            <div>
                <h2>{sho.name}</h2>
                <img src={sho.img} alt={sho.name}></img>
            </div>
        </div>

    )
}
