import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FcHome } from 'react-icons/fc'
import { RiArrowRightSFill, RiArrowLeftCircleLine } from 'react-icons/ri'

export default function Breadcumb({title}) {
    const router=useRouter();
    
    return (
        <div className='my-2 bg-light d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-1'>
                <div className='mx-2 d-flex align-items-center'>
                    <Link href="/" className='text-decoration-none'>
                        <FcHome size={38} />
                    </Link>
                    <RiArrowRightSFill size={30} color='#FF6347' />
                </div>
                <h2 className='text-center py-2 text-uppercase txtColor'>{title}</h2>
            </div>
            <div className='px-2'>
                <Link href="#" className='text-decoration-none' onClick={() => router.back()}>
                    <RiArrowLeftCircleLine size={38} color='#FF6347' />
                </Link>
            </div>
        </div>
    )
}
