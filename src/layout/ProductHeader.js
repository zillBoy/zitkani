import React from 'react'
import LandingImage1 from '../assets/images/landing1.jpg'
import LandingImage2 from '../assets/images/landing2.png'

const ProductHeader = () => {
    return (
        <div className='productheader-container'>
            <div className='productheader-container-imagecontainer'>
                <img className='productheader-container-imagecontainer-img' src={LandingImage1} alt='women model' />
            </div>
            <div className='productheader-container-content'>
                <p className='productheader-container-content--para'>Scroll Down To Explore</p>
                <img className='productheader-container-content-img' src={LandingImage2} alt='women model 2' />
            </div>
        </div>
    )
}

export default ProductHeader
