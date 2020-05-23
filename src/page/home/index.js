import React, { useState } from 'react'

import ChooseJoke from '../../components/home'
import { JokeList } from '../../components/joke_list'
import Favourite from '../../components/favourite/index'

import burgerOpen from '../../assets/burgerOpen.png'
import burgerClose from '../../assets/burgerClose.png'

import { useStyles } from './styles'
import { Backdrop } from '@material-ui/core'


const Home = () => {
    const {
        homeContainer, searchContainer, favouriteConteiner, mobileBurger,
        mobileCont, backdrop
    } = useStyles({})

    const [isOpen, setisOpen] = useState(true)

    const toggleMenu = () => {
        setisOpen(!isOpen)
    }

    return(
        <>
        <div className={homeContainer}>
            <div className={searchContainer}>
                <ChooseJoke />
                <JokeList />
            </div>
            <div className={mobileBurger}>
                <img 
                    src={isOpen ? burgerOpen : burgerClose} 
                    alt='favourite' 
                    onClick={toggleMenu}
                /> 
                Favourite
            </div>
            <div className={favouriteConteiner}>
                <Favourite />
            </div>
        </div>
            {
                isOpen 
                ? null
                : <div className={mobileCont}>
                    <Favourite />
                    <Backdrop className={backdrop} open={isOpen} onClick={toggleMenu}/>
                </div>
            }
            
        </>
    )
}
export default Home;