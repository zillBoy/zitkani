import React from 'react'

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__container-logocontainer'>
                <div className='footer__container-logocontainer-logo'>
                    <h1>Zitkani</h1>
                    <p>We bring art into everyday life</p>
                </div>
                <div className='footer__container-logocontainer-copyright'>
                    <p>2021 Zitkani</p>
                </div>
            </div>
            <div className='footer__container-nav'>
                <h2 className='footer__container-nav--header'>Menu</h2>
                <div className='footer__container-nav--navitems'>
                    <p className='footer__container-nav--navitems--item'>Home</p>
                    <p className='footer__container-nav--navitems--item'>About us</p>
                    <p className='footer__container-nav--navitems--item'>Shop</p>
                    <p className='footer__container-nav--navitems--item'>Account</p>
                    <p className='footer__container-nav--navitems--item'>Contacts</p>
                </div>
            </div>
            <div className='footer__container-nav'>
                <h2 className='footer__container-nav--header'>Support</h2>
                <div className='footer__container-nav--navitems'>
                    <p className='footer__container-nav--navitems--item'>Delivery&Payment</p>
                    <p className='footer__container-nav--navitems--item'>Return Policy</p>
                    <p className='footer__container-nav--navitems--item'>FAQ</p>
                </div>
            </div>
            <div className='footer__container-nav'>
                <h2 className='footer__container-nav--header'>Contact Us</h2>
                <div className='footer__container-nav--navitems'>
                    <p className='footer__container-nav--navitems--item'>+380 66 556 7865</p>
                    <p className='footer__container-nav--navitems--item'>+380 66 556 7865</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
