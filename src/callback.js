import React, { useState, useCallback, useEffect, useMemo } from 'react'
import List from './list.js'
const Callback = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)
    const getItems = useCallback((inc) => {
        return [number, number + 1 + inc, number + 2 + inc]
    }, [number])
    const themeStyle = useMemo(() => {
        return { backgroundColor: dark ? 'black' : "white", color: dark ? "white" : 'black' }
    }, [dark])

    useEffect(() => {
        console.log('themeStyle changed')
    }, [themeStyle])

    return (
        <>
            <input type="number" value={number} onChange={(e) => { setNumber(parseInt(e.target.value)) }} />
            <button onClick={() => { setDark(prevDark => !prevDark) }}>change theme</button>
            <div style={themeStyle}><List getItems={getItems} /></div>
        </>
    )
}

export default Callback
