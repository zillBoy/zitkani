import React from 'react'

const ProductPrice = ({ firstLabel, secondLabel }) => {
    return (
        <div className='productheader-container-content--collectionparadiv'>
            <p className='productheader-container-content--collectionpara productheader-container-content--collectionpara--small'>{firstLabel}</p>
            <p className='productheader-container-content--collectionpara'>{secondLabel}</p>
        </div>
    )
}

export default ProductPrice
