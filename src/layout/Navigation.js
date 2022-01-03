import React from 'react'
import TextChevron from '../components/TextChevron'
import NavigationHeader from './NavigationHeader'

const Navigation = () => {
    return (
        <div>
            <NavigationHeader />
            <div className='navigation-maincontainer'>
                <div className='navigation-container'>
                    <TextChevron text='Shop' />
                    <TextChevron text='Collections' />
                    <p>About</p>
                    <p>Delivery&Payment</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation
