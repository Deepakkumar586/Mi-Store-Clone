import React from 'react'
import Offer from './Offer.js'
import '../styles/Offers.css'

function Offers({ offers }) {
    return (
        <div className='offer-section'>
            {
                offers.map((item, index) => (
                    <Offer key={item.image} index={index} src={item.image} link={item.url} />
                ))
            }


        </div>
    )
}

export default Offers
