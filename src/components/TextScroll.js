import React from 'react'

const TextScroll = ({ scroll='right', text='', className }) => {
    return (
        <div className='textscroll-container'>
            <div className={`textscroll textscroll-${scroll} textscroll-${className}`}>
                <span>
                    <span>{text}</span>
                    <span className='textscroll--grey'>{text}</span>
                    <span>{text}</span>
                    <span className='textscroll--grey'>{text}</span>
                </span>
            </div>
        </div>
    )
}

export default TextScroll
