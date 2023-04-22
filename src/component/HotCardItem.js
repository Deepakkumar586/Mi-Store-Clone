import React from 'react'
import '../styles/HotCardItem.css'

function HotCardItem({ image, name, index, price }) {
    return (
        <div className='hot-Card-item'>
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>

        </div>
    )
}

export default HotCardItem
