import React, { useState } from 'react'
import Modal from './Modal'

const ModalTest = () => {
    const [ShowModalPopup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup() {
        setShowModalPopup(!ShowModalPopup)
    }
    function onClose() {
        setShowModalPopup(false)
    }
    return (
        <div className='py-20 container mx-auto text-center'>
            <button className='cursor-pointer bg-black px-8 py-3 rounded-lg text-white' onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                ShowModalPopup && <Modal onClose={onClose} id={'custom-id'} header={<h2>Customize Header</h2>} />
            }
        </div>
    )
}

export default ModalTest