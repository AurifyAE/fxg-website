import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Product from './Product'
import products from '../data/products'

export default function ProductList() {
    return (
        <div 
            id='products' 
            className='bg-white flex flex-col items-center justify-center w-full h-full py-20 overflow-x-hidden'
        >
            <motion.h1 
                className='text-4xl text-black font-[Aptumi] font-bold mb-15'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Our Product
            </motion.h1>
            <motion.div 
                className='flex flex-wrap justify-center gap-12'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </motion.div>
        </div>
    )
}
