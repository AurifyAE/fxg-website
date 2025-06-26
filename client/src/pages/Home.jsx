import React from 'react'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'
import Promo from '../components/Promo'
import Highlights from '../components/Highlights'
import Services from '../components/Services'

export default function Home() {
    return (
        <div className='overflow-x-hidden'>
            <Hero />
            <ProductList />
            <Services />
            <Highlights />
            <Promo />
        </div>
    )
}
