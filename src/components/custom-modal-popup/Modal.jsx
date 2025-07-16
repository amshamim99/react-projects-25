import React from 'react'

const Modal = ({ id,header,body,footer,onClose }) => {
    return (
        <div onClick={onClose} id={id || "modal"} className='modal fixed left-0 top-0 z-10 pt-[150px] h-full w-full bg-[#000] overflow-auto'>
            <div className="modal-content bg-[#fefefe] border border-red-500 relative mx-auto p-0 w-[80%]">
                <div className='header bg-[#5cb85c] py-4 px-4 text-white'>
                        <span onClick={onClose} className='modal-popup-icon cursor-pointer float-right text-4xl'>&times;</span>
                        <h2>{header? header : "Header"}</h2>
                </div>
                <div className='body py-1 px-4 h-56'>
                    {
                        body ? body : <div>
                            <p>This is Our Modal Body</p>
                        </div>
                    }
                </div>
                <div className='footer py-1 px-4 bg-[#5cb85c] text-white'>
                        {
                            footer ? footer : <h2>Footer</h2>
                        }
                </div>
            </div>
        </div>
    )
}

export default Modal