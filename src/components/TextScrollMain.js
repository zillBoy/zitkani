import React from 'react'
import TextScroll from './TextScroll'

const TextScrollMain = ({ text='', className='', color='' }) => {
    return (
        <div className={`textscroll_main textscroll_main--${color}`}>
            <TextScroll color={color} className={className} text={text} />
            <TextScroll color={color} className={className} scroll='left' text={text} />
        </div>
    )
}

export default TextScrollMain
