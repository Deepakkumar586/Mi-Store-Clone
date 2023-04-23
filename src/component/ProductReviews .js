import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReviews.css'

function ProductReviews({ productReviews }) {
    return (
        <div className='product-reviews'>
            {
                productReviews.map((item, index) => (
                    <ProductReviewCard name={item.name} review={item.review} price={item.price} image={item.image} key={item.image} index={item.index} />
                ))
            }

        </div>
    )
}

export default ProductReviews 
