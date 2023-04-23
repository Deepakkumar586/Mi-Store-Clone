import React from 'react'
import '../styles/ProductReviewCard.css'

function ProductReviewCard({ image, index, price, review, name }) {
    return (
        <div className='product-card'>
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewCard
