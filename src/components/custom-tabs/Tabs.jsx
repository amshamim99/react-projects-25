import React, { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {

    const [currentTabsIndex,setCurrentTabsIndex] = useState(0)

    function handleOnClick(getCurrentTabsIndex){
        setCurrentTabsIndex(getCurrentTabsIndex)
        onChange(getCurrentTabsIndex)
    }

    return (
        <div className='wrapper p-2 container mx-auto'>
            <div className='headding flex justify-center mb-3'>
                {
                    tabsContent.map((tabItem,index) => (
                    <div className={`tab-item ${currentTabsIndex === index ? "active" : ""}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
                        <span className='label'>{tabItem.label}</span>
                    </div>))
                }
            </div>
            <div className='content text-red-500'>
                {
                    tabsContent[currentTabsIndex] && tabsContent[currentTabsIndex].content
                }
            </div>
        </div>
    )
}

export default Tabs