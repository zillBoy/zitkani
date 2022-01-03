import React from 'react'
import { Search, User, Heart, ShoppingCart } from 'react-feather'
import TextChevron from '../components/TextChevron'

const NavigationHeader = () => {
    return (
        <div className='navigationheader__maincontainer'>
            <div className='navigationheader__container'>
                <div className='navigationheader__container-languagecontainer'>
                    <div className='navigationheader__container-languagecontainer-language'>
                        <p className='navigationheader__container-languagecontainer-language--en'>EN</p>
                        <p className='navigationheader__container-languagecontainer-language--ua'>UA</p>
                    </div>
                    <TextChevron className='white' text='USD' />
                </div>
                <div className='navigationheader__container-logocontainer'>
                    <h1 className='navigationheader__container-logocontainer-header'>ZITKANI</h1>
                </div>
                <div className='navigationheader__container-icons'>
                    <Search size={20} />
                    <User size={20} />
                    <Heart size={20} />
                    <div className='navigationheader__container-icons--shopcart'>
                        <ShoppingCart size={20} />
                        <span className='navigationheader__container-icons--span'>(0)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationHeader
