import React, { useRef, useState } from 'react'
import useOutsideClik from '.';

const UseOnclickOutsideTest = () => {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef();
    useOutsideClik(ref, () => setShowContent(false))

    return (
        <div className='text-center py-20'>
            {
                showContent ? (
                <div ref={ref}>
                    <h1>This is a random content</h1>
                    <p>Please Outside click of this to close this.It won't close if you clicked inside this content</p>
                </div>) : (<button className='px-6 py-3 border border-gray-500 rounded-lg cursor-pointer' onClick={() => setShowContent(true)}>Show Content</button>)
            }
        </div>
    )
}

export default UseOnclickOutsideTest