import React from 'react'
import Header from './layout/Header'
import Navigation from './layout/Navigation'
import ProductHeader from './layout/ProductHeader'
import TextScrollMain from './components/TextScrollMain'
import ProductDesc from './components/ProductDesc'

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <ProductHeader />
      <TextScrollMain text='who is zitkani' />
      <ProductDesc />
      {/* <TextScrollMain text='new collection' className='collection' /> */}
    </>
  )
}

export default App
