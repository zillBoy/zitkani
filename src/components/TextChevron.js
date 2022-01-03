import React from 'react'
import { ChevronDown } from 'react-feather'

const TextChevron = ({ className='', text='', size=18 }) => {
    return (
        <div className={`textchevron-container textchevron-container--${className}`}>
            <span>{text}</span>
            <ChevronDown size={size} />
        </div>
    )
}

export default TextChevron
