import React from 'react'

const Subscribe = () => {
    return (
        <div className='subscribe__container'>
            <p className='subscribe__container-para'>Be the first to know about existing sales and new product</p>
            <div className='subscribe__container-inputdiv'>
                <input className='subscribe__container-inputdiv-input' type='email' placeholder='E-mail' />
                <button className='subscribe__container-inputdiv-btn'>subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
