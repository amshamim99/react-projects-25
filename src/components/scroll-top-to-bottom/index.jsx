import React, { useRef } from 'react'
import Usefetch from '../usefetch-hook/Usefetch'

const ScroolToTopAndBottom = () => {

    const { data, error, pending } = Usefetch("https://dummyjson.com/products", {})
    const bottomRef = useRef(null)

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    function hanldeScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (error) {
        return <h1>Error Occurd ! please try again</h1>
    }
    if (pending) {
        return <h1>Loading ! please wait</h1>
    }
    return (
        <div className='text-center py-40'>
            <h1 className='text-4xl font-bold mb-3'>Scrol to top and bottom features</h1>
            <h3>This is the top section</h3>
            <button onClick={hanldeScrollToBottom} className='bg-green-500 text-white px-8 py-3 rounded-lg my-4 cursor-pointer'>Scroll to bottom</button>
            <ul>
                {
                    data && data.products && data.products.length ? data.products.map((productItem) => <li key={productItem.key}>{productItem.title}</li>) : null
                }
            </ul>

            <button onClick={handleScrollToTop} className='bg-green-500 text-white px-8 py-3 rounded-lg my-4 cursor-pointer'>Scroll to top</button>
            <h3>This is the bottom section</h3>
            <div ref={bottomRef}></div>
        </div>
    )
}

export default ScroolToTopAndBottom