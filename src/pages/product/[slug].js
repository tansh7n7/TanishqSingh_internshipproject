import Breadcumb from '@/components/layout/Breadcrumb';
import { addToCart } from '@/utils/cartItems';
import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { BsCurrencyRupee } from 'react-icons/bs'

export default function SingleProduct({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Head><title>Product Name</title></Head>
      <main>
        <Breadcumb title={'Product'} />
        <div className='row g-3'>
          {/** product image section */}
          <div className='col-lg-6'>
            <div className='p-2'>
              <Image src={product?.thumbnail} className='border' alt={product?.title} width={350} height={300}></Image>
            </div>
          </div>
          {/** product description section */}
          <div className='col-lg-6'>
            <h2>{product?.title}</h2>
            <h4 className='card-title d-flex align-items-center'><BsCurrencyRupee />{product?.price}</h4>
            <h5 className='mt-2'>Description</h5>
            <p>{product?.description}</p>
            <div className='d-flex gap-3'>
              <b>Qauntity:</b>
              <div className="input-group input-group-sm w-25 mb-3 border">
                <button className="input-group-text btn btn-sm btn-outline-dark" onClick={() => setQuantity((quantity > 1) ? quantity - 1 : 1)}>-</button>
                <input type="tel" className="form-control" value={quantity} />
                <button className="input-group-text btn btn-sm btn-outline-dark" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            <div className='d-flex gap-3 mt-2'>
              <button type='button' className='btn btn-sm btn-warning' onClick={(e) => { addToCart(product, quantity), toast.success('Added in cart.') }}>Add to Cart</button>
              <button type='button' className='btn btn-sm btn-success'>Buy</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

// Products listing using getServerSideProps for Product-Details
export async function getServerSideProps(context) {
  const productID = context.params.slug;
  let product = []
  try {
    const responce = await fetch(`https://dummyjson.com/products/${productID}`);
    product = await responce.json();
  } catch (error) {
    console.error(error)
    return { notFound: true }
  }

  return {
    props: {
      product
    }
  }
}