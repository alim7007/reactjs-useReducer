import React, { useState, useEffect, useMemo } from 'react'

const Memo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => { return slowFunction(number) }, [number])
    const themeStyle = useMemo(() => {
        return { backgroundColor: dark ? 'black' : "white", color: dark ? "white" : 'black' }
    }, [dark])


    function slowFunction(num) {
        console.log('calling slowfunction')
        for (let i = 0; i < 10000000; i++) {
            return num * 2
        }
    }

    useEffect(() => {
        console.log('themeStyle changed')
    }, [themeStyle])

    return (
        <>
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <button onClick={() => { setDark(prevDark => !prevDark) }}>change theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    )
}

export default Memo
