import React from 'react'
import TextScroll from './TextScroll'

const TextScrollMain = ({ text='', className='' }) => {
    return (
        <div className='textscroll_main'>
            <TextScroll className={className} text={text} />
            <TextScroll className={className} scroll='left' text={text} />
        </div>
    )
}

export default TextScrollMain
