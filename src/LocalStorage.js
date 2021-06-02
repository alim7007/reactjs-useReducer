import React, { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'



const LocalStorage = () => {

    const [name, setName] = useLocalStorage('name', '')
    const [name2, setName2] = useLocalStorage('name2', 'asdasd')

    useEffect(() => {
        console.log(name2)
    }, [name2])

    return (
        <div>
            <input type="text" value={name} onChange={((e) => { setName(e.target.value) })} />
            <input type="text" value={name2} onChange={((e) => { setName2(e.target.value) })} />
        </div>
    )
}

export default LocalStorage
