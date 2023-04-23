import React from 'react'
import VideosCard from './VideosCard.js'
import '../styles/Videos.css'

export default function Videos({ videos }) {
    return (
        <div className='videos'>
            {
                videos.map((item, index) => (
                    <VideosCard index={item.index} key={item.image} image={item.image} name={item.name} />
                ))
            }

        </div>
    )
}
