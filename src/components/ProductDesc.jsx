import React from 'react'
import ProductModelImage from '../assets/images/3.jpg'

const ProductDesc = () => {
    return (
        <div className='productdesc_container'>
            <div className='productdesc_container-imagediv'>
                <h1 className='productdesc_container-imagediv--header'>Z</h1>
                <img className='productdesc_container-imagediv--img' src={ProductModelImage} alt='product girl model' />
            </div>
            <div className='productdesc_container-content'>
                <p className='productdesc_container-content--para'>Zitkani is a unique collection of scarves and jackets depicting by world famous artists.</p>
                <p className='productdesc_container-content--para'>Zitkani is a silk cloth woven from pure art. The ingenious paintings of the words most prominent artists have now settled on delicate shawls and jackets to gently envelop you.</p>
                <div className='productdesc_container-content--btn'>
                    <span className='productdesc_container-content--btn--span productdesc_container-content--btn--span1'></span>
                    <p>Read About Us</p>
                    <span className='productdesc_container-content--btn--span productdesc_container-content--btn--span2'></span>
                </div>
            </div>
        </div>
    )
}

export default ProductDesc
