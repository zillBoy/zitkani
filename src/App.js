import React from 'react'
import Header from './layout/Header'
import Navigation from './layout/Navigation'
import ProductHeader from './layout/ProductHeader'
import TextScrollMain from './components/TextScrollMain'
import ProductDesc from './components/ProductDesc'

import LandingImage1 from './assets/images/landing1.jpg'
import LandingImage2 from './assets/images/landing2.png'
import CollectionImage1 from './assets/images/featured_product1.jpg'
import CollectionImage2 from './assets/images/featured_product2.jpg'


const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <ProductHeader image1={LandingImage1} image2={LandingImage2} />
      <TextScrollMain text='who is zitkani' />
      <ProductDesc />
      <div style={{marginTop: '5rem'}}>
        <TextScrollMain text='new collection' className='collection' />
      </div>
      <ProductHeader header='collection' image1={CollectionImage2} image2={CollectionImage1} className='reverse'  />
      <TextScrollMain text='All product' color='secondary' className='product' />
    </>
  )
}

export default App
