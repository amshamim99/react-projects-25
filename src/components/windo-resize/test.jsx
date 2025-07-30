import React from 'react'
import UseWindowResize from '.'

const UseWindowResizeTest = () => {

    const windoSize = UseWindowResize();
    const {width, height} = windoSize;

    return (
        <div className='text-center'>
            <h1 className='text-4xl mb-3'>use windo resize hook</h1>
            <p className='text-xl mb-2'>
                widt is {width}
            </p>
            <p className='text-xl mb-2'>
                height is {height}
            </p>
        </div>
    )
}

export default UseWindowResizeTest