import { useRouter } from 'next/router'
import React from 'react'

export default function ThankYou() {
    const router = useRouter();
    console.log('router', router.query)
    return (
        <div>
            <h1>Thanks for shopping.</h1>
        </div>
    )
}
