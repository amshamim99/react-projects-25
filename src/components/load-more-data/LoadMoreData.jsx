import React, { useEffect, useState } from 'react'

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products])
                setLoading(false)
            }

            console.log(result)

        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true);
    }, [products])

    if (loading) {
        return (
            <div>loading data ! please wait</div>
        )
    }

    return (
        <div className='container mx-auto flex flex-col gap-5'>
            <div className='grid grid-cols-4 gap-2'>
                {
                    products && products.length ?
                        products.map(item => <div className='p-5 border border-gray-400 flex flex-col gap-2' key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>)
                        : null
                }
            </div>
            <div className='button-container text-center'>
                <button className='py-3 px-6 bg-green-500 text-white rounded-lg mb-6 cursor-pointer' disabled={disableButton} onClick={() => setCount(count + 1)}>load more products</button>
                {
                    disableButton ? <p>you have reached 100 products</p> : null
                }
            </div>
        </div>
    )
}

export default LoadMoreData