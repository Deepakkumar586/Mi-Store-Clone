import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessory.css'

function HotAccessoryMenu() {
    return (
        <div className='HotAccessory-Menu'>
            <Link className="HotAccessoryLink" to="/music">Music Store</Link>
            <Link className="HotAccessoryLink" to="/smartDevices">Smart Devices</Link>
            <Link className="HotAccessoryLink" to="/home">HotAccessoryMenu</Link>
            <Link className="HotAccessoryLink" to="/lifestyle">LifeStyle</Link>
            <Link className="HotAccessoryLink" to="/mobileAccessories">Mobile Accessories</Link>

        </div>
    )
}

export default HotAccessoryMenu
