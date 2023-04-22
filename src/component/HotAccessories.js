import React from 'react'
import HotCardItem from './HotCardItem.js'
import '../styles/HotAccessories.css'

function HotAccessories({ music, musicCover, smartDevices, smartDevicesCover, home, homeCover, lifestyle, lifestyleCover, mobile, mobileCover }) {
    return (
        <div className='HotAccessories-product'>
            <div>
                <img src={musicCover || smartDevicesCover || homeCover || lifestyleCover || mobileCover} alt='Cover' />
            </div>

            {/* --------2nd div */}
            <div>

                {music && music.map((item, index) => (
                    <HotCardItem key={item.image} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))
                }
                {smartDevices && smartDevices.map((item, index) => (
                    <HotCardItem key={item.image} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))
                }
                {/* For Home  */}
                {home && home.map((item, index) => (
                    <HotCardItem key={item.image} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))
                }

                {/* For LifeStyle */}

                {lifestyle && lifestyle.map((item, index) => (
                    <HotCardItem key={item.image} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))
                }

                {/* For Mobile Accessories */}

                {mobile && mobile.map((item, index) => (
                    <HotCardItem key={item.image} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))
                }

                {/* extra card Component use */}
                <HotCardItem image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            </div>

        </div>
    )
}

export default HotAccessories
