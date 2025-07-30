import React, { useRef } from 'react'



const sectionData = [
        {
            label: 'first card',
            style: 
                {
                    width: "100%",
                    height: '600px',
                    background: 'red'
                }
            
        },
        {
            label: 'second card',
            style: 
                {
                    width: "100%",
                    height: '600px',
                    background: 'green'
                }
            
        },
        {
            label: 'third card',
            style: 
                {
                    width: "100%",
                    height: '600px',
                    background: 'blue'
                }
            
        },
        {
            label: 'four card',
            style: 
                {
                    width: "100%",
                    height: '600px',
                    background: 'pink'
                }
            
        },
        {
            label: 'five card',
            style: 
                {
                    width: "100%",
                    height: '600px',
                    background: 'yellow'
                }
            
        }
    ]



const ScrollToSection = () => {
    
    const ref = useRef()

    function handleScrollToSection() {
        let pos = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: pos,
            behavior:'smooth'
        })
    }

    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Scrolll to section</h2>
            <button onClick={handleScrollToSection} className='px-6 py-3 rounded-lg bg-green-500 text-white cursor-pointer my-4'>scroll to section</button>

            {
                sectionData.map((sdataItem ,index) => (
                    <div ref={index === 3 ? ref : null} style={sdataItem.style} >
                        <p className='text-3xl text-center'>{sdataItem.label}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ScrollToSection