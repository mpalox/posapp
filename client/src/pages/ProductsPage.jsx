import React from 'react'
import Header from "../components/header/Header"
import Edit from '../components/products/Edit'
const ProductsPage = () => {
  return (
    <>
      <Header />
      <div className='px-6'>
        <h1 className='text-4xl font-bold text-center mb-4'>Urunler</h1>
        <Edit />

      </div>
    </>
  )
}

export default ProductsPage
