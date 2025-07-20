import React from 'react'
import Usefetch from './Usefetch'


const UseFetchTestHook = () => {
    const { data, error, pending } = Usefetch("https://dummyjson.com/products", {})

    console.log( error, data, pending)
    return (
        <div className='text-center'>
            <h1 className='text-4xl mb-5'>Use Fetch Hook</h1>
            {
                pending ? <h1>Pending ! please wait</h1> : null
            }
            {
                error ? <h1>{error}</h1> : null
            }
            {
                data && data.products && data.products.length ? data.products.map((productItem) => <p key={productItem.key}>{productItem.title}</p>) : null
            }
        </div>
    )
}

export default UseFetchTestHook