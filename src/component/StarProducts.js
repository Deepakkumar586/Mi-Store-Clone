import React from 'react'
import '../styles/StarProducts.css'
function StarProducts({ StarProducts }) {
    return (
        <div className='star-product'>
            {/* Left side Image */}
            <div>
                <a href={StarProducts[0].url}>
                    <img src={StarProducts[0].image} alt='1st Image' />
                </a>
            </div>
            {/* Right side image*/}
            <div>
                <a href={StarProducts[1].url}>
                    <img src={StarProducts[2].image} alt='1st Image' />
                </a>
                <a href={StarProducts[2].url}>
                    <img src={StarProducts[2].image} alt='1st Image' />
                </a>
                <a href={StarProducts[3].url}>
                    <img src={StarProducts[3].image} alt='1st Image' />
                </a>

            </div>
        </div>





    )
}

export default StarProducts
