import React, { useState } from 'react'
import data from './data';
import { flushSync } from 'react-dom';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        // console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(copyMultiple)
    }
    // console.log(selected, multiple)
    return (
        <div className='container mx-auto flex flex-col gap-5 justify-center items-center h-screen w-screen'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className='py-3 px-5 bg-[#614101] text-white cursor-pointer font-bold text-xl'>Enable Multi Selection</button>
            <div className='text-center w-[500px]'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className='item bg-[#614101] mb-5 py-5 px-3'>
                            <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className='title flex justify-between items-center cursor-pointer text-white'>
                                <h3>{dataItem.questions}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ?
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className='text-white h-auto'>{dataItem.answer}</div>
                                    : selected === dataItem.id &&
                                    <div className='text-white h-auto'>{dataItem.answer}</div>
                            }
                            {/* {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                    <div className='text-white h-auto'>{dataItem.answer}</div>
                                    : null
                            } */}
                        </div>)

                        : <div>data no found</div>
                }
            </div>

        </div>

    )
}

export default Accordion