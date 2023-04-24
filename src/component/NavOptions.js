import React, { useEffect, useState } from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOptions.css'



function NavOptions({ miPhones, redmiPhones, tv, accessories, fitnesAndLifestyle, home, audio, laptop }) {

    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, sethomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);



    useEffect(() => {
        if (window.location.pathname === "/miphones") {
            setMiPhoneToggle(true);

        }
        if (window.location.pathname === "/redmiphones") {
            setRedmiPhoneToggle(true);
        }
        if (window.location.pathname === "/tv") {
            setTvToggle(true);
        }
        if (window.location.pathname === "/laptops") {
            setLaptopToggle(true);
        }
        if (window.location.pathname === "/lifestyle") {
            setFitnessToggle(true);
        }
        if (window.location.pathname === "/home") {
            sethomeToggle(true);
        }

        if (window.location.pathname === "/audio") {
            setAudioToggle(true);
        }
        if (window.location.pathname === "/accessories") {
            setAccessoriesToggle(true);
        }
    }, [])




    return (
        <div className='navOptions'>

            {miPhoneToggle ? miPhones.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={item.index} />

            )) : null}


            {redmiPhoneToggle ? redmiPhones.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}


            {tvToggle ? tv.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}

            {laptopToggle ? laptop.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}

            {accessoriesToggle ? accessories.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}

            {homeToggle ? home.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}

            {audioToggle ? audio.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}
            {fitnessToggle ? fitnesAndLifestyle.map((item, index) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}



        </div>
    )
}

export default NavOptions
