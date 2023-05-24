import Link from 'next/link'
import React from 'react'
import { RxDot } from 'react-icons/rx'
import { BiCategory } from 'react-icons/bi'
import { fetcher } from '@/utils/swrFetcher'
import useSwr from 'swr'

export default function SideBar() {
  //const categoriesArray = [1, 2, 3, 4, 5, 6, 7]
  const { data, error, isLoading } = useSwr('https://dummyjson.com/products/categories', fetcher);
  if (error) return <div>Failed to fetch the data.</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <div className='w-100'>
      <ul className='list-group'>
        <li className='list-group-item d-flex align-items-center navbar-top-bg'>
          <h5 className='mt-2 text-uppercase text-white d-flex align-items-center'><BiCategory />CATEGORIES</h5>
        </li>
        {
          /**Loop For categories */
          data.map((category, i) => {
            return (
                <Link key={i} href={`/category/${category}`} className='text-decoration-none'>
                  <li className='list-group-item list-group-item-ation d-flex align-items-center txtColor'>
                    <RxDot size={25} className='m-2' /> {category}
                  </li>
                </Link>
            )
          })
        }
      </ul>
    </div>
  )
}