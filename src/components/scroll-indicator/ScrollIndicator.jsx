import React, { useEffect, useState } from 'react'

const ScrollIndicator = ({ url }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();


            console.log(data)

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false)
            }

        } catch (e) {
            console.log(e);
            setErrorMessage(e.message)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);


    function handleScrollPercentage() {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight,
        );
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, []);

    console.log(data, scrollPercentage)

    if (errorMessage) {
        return <div>Error ! {errorMessage}</div>
    }

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    return (
        <div className='text-center'>
            <div className="top-container fixed top-0 z-10 text-center bg-black w-full">
                <h1 className='text-4xl text-white py-5 font-bold'>Custom Scroll Indicator</h1>
                <div className='scroll-progress-tracking-container w-full h-[10px] bg-amber-200'>
                    <div className='current-progress-bar h-[10px] bg-green-300 w-[0%]' style={{ width: `${scrollPercentage}%` }}>

                    </div>
                </div>
            </div>
            <div className='data-container'>
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => <p>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator