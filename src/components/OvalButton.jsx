import React from 'react'

const OvalButton = ({ btnText }) => {
    return (
        <div className='oval-btn'>
            <span className='oval-btn--span oval-btn--span1'></span>
            <p className='oval-btn--para'>{btnText}</p>
            <span className='oval-btn--span oval-btn--span2'></span>
        </div>
    )
}

export default OvalButton
