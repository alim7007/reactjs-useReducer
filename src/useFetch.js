import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { apiReducer, initialState } from './StateReducer'

export function useFetch(url) {
    const [data, dispatch] = useReducer(apiReducer, initialState)

    const fetchProcess = () => {
        dispatch({ type: 'Fetch_Start' })
        axios.get(`http://localhost:8800${url}`).then(response => {
            dispatch({ type: 'Fetch_Success', payload: response.data })
        }).catch(error => {
            dispatch({ type: 'Fetch_Failure', payload: error.message })
        })
    }
    useEffect(() => {
        fetchProcess()
    }, [])

    return data
}