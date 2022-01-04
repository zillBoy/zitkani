import React from 'react'

const ProductHeader = ({ className='', image1, image2, header='' }) => {
    return (
        <div className={`productheader-container productheader-container-${className}`}>
            <div className='productheader-container-imagecontainer'>
                <img className='productheader-container-imagecontainer-img' src={image1} alt='women model' />
            </div>
            <div className='productheader-container-content'>
                {header === 'collection' ? <div className='productheader-container-content--collection'>
                    <p className='productheader-container-content--firstcollectionpara'>02/05</p>
                    <img className='productheader-container-content-img productheader-container-content-imgcollection' src={image2} alt='women model 2' />
                    <div className='productheader-container-content--collectionparadiv'>
                        <p className='productheader-container-content--collectionpara productheader-container-content--collectionpara--small'>100 cm</p>
                        <p className='productheader-container-content--collectionpara'>89.00 USD</p>
                    </div>
                </div> : <>
                    <p className='productheader-container-content--para'>Scroll Down To Explore</p>
                    <img className='productheader-container-content-img' src={image2} alt='women model 2' />
                </>}
            </div>
        </div>
    )
}

export default ProductHeader
