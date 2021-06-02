import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { useFetch } from './useFetch'
import { apiReducer, initialState } from './StateReducer'
const FetchPage = () => {
    const [data, dispatch] = useReducer(apiReducer, initialState)
    const [change, setChange] = useState(false)
    const Data = useFetch('/')
    const Data2 = useFetch('/qaz')

    useEffect(() => {
        dispatch({ type: 'Replace-State', payload: Data2 })
        setChange(!change)
    }, [Data2])

    useEffect(() => {
        dispatch({ type: 'Different', payload: "key" })
    }, [change])
    useEffect(() => { console.log(data) }, [data])


    return (
        <div>
            {Data.data.map((a, i) => (
                <p key={i}>{a.name}</p>
            ))}
            {Data2.data.map((a, i) => (
                <p key={i}>{a.IDI_Nakhuy}</p>
            ))}
        </div>
    )
}

export default FetchPage
