import React from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import ProductImage1 from '../assets/images/product1.jpg'
import ProductImage2 from '../assets/images/product2.jpg'
import ProductImage3 from '../assets/images/product3.jpg'
import OvalButton from './OvalButton'
import ProductPrice from './ProductPrice'

const Product = () => {
    return (
        <div className='product_container'>
            <div className='product_container-icons'>
                <ArrowLeftCircle size={50} />
                <ArrowRightCircle size={50} />
            </div>
            <div className='product_container-imagedivcontainer'>
                <div className='product_container-imagediv'>
                    <div className='product_container-imagediv-main'>
                        <img className='product_container-imagediv-image' src={ProductImage1} alt='model1' />
                        <ProductPrice firstLabel='65 cm' secondLabel='99.00 USD' />
                    </div>
                    <div>
                        <img className='product_container-imagediv-image product_container-imagediv-image--center' src={ProductImage2} alt='model2' />
                        <ProductPrice firstLabel='80 cm' secondLabel='89.00 USD' />
                    </div>
                    <div>
                        <img className='product_container-imagediv-image' src={ProductImage3} alt='model3' />
                        <ProductPrice firstLabel='100 cm' secondLabel='119.00 USD' />
                    </div>
                </div>
            </div>

            <div className='product_container-btndiv'>
                <OvalButton btnText='Shop Now' />
            </div>
        </div>
    )
}

export default Product
