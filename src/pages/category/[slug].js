import ProductCart from '@/components/cards/ProductCart';
import Breadcumb from '@/components/layout/Breadcrumb';
import { useRouter } from 'next/router'
import React from 'react'

{/** Show the data from column1-Sidebar-Categorie to column2-Layout */ }
export default function CategoryProducts({products}) {
  const router = useRouter();
  const categoryName = router?.query?.slug;
  return (
    <>
      <head><title>{categoryName}</title></head>
      <main>
        <Breadcumb title={`${categoryName?.toLocaleLowerCase()} - Products`} />
        <div className='row'>
          {
            products && products.map((item) => {
              return (
                <div key={item.id} className='col-md-3 mt-4'><ProductCart product={item} /></div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}


// Products listing using getServerSideProps for Categories
export async function getServerSideProps(context) {
  const category = context.params.slug;
  let products = []
  try {
    const responce = await fetch(`https://dummyjson.com/products/category/${category}`);
    const result = await responce.json();
    products = result.products;
  } catch (error) {
    console.error(error)
    return { notFound: true }
  }

  return {
    props: {
      products
    }
  }
}