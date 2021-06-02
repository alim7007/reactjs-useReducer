import { cleanup } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

const Async = () => {
    async function asyn() {
        await setTimeout(() => {
            console.log('time1')
        }, 2000)
        await setTimeout(() => {
            console.log('time2')
        }, 2000)
    }
    useEffect(() => {
        asyn()
    }, [])
    return (
        <div>
            asd
        </div>
    )
}
export default Async
