import React, { useLayoutEffect, useState } from 'react'

const UseWindowResize = () => {

    const [windowSize, setWindowSize] = useState({
        width : 0,
        height : 0
    })

    function handleResize() {
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight
        })
    }

    useLayoutEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    return windowSize

}

export default UseWindowResize