import React from 'react'
import shoe from '../shoe.json'
import {Link} from 'react-router-dom'

export const LaunchItem = () => {
    console.log(shoe)
    return (
        <div className="screen">
            <h1>Products</h1>
            <div className="ads">
            {Object.keys(shoe).map(keyName=>{
                    const sho = shoe[keyName];
                    return (
                        <Link style={{ textDecoration: 'none', color: 'black' }} key={keyName} 
                            className="link" 
                            to={`/products/${keyName}`}>
                                <h4>{sho.name}</h4>
                                <img src={sho.img} height={250} width={300} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    )
}
