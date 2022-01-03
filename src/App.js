import React from 'react'
import TextScroll from './components/TextScroll'
import Header from './layout/Header'
import Navigation from './layout/Navigation'
import ProductHeader from './layout/ProductHeader'

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <ProductHeader />
      <TextScroll text='who is zitkani' />
      <TextScroll scroll='left' text='who is zitkani' />
      
    </>
  )
}

export default App
