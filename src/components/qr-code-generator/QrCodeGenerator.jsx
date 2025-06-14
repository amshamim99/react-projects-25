import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {
    const [qrCode,setQrCode] = useState('')
    const [input,setInput] = useState('')

    function handleGenerateQrCode (){
        setQrCode(input)
        setInput('')
    }
    return (
        <div className='text-center'>
            <h1 className='mb-5 text-4xl font-bold'>Qr Code Generator</h1>
            <div className='mb-5'>
                <input className='border border-black p-2 outline-none mr-2 rounded-lg' onChange={(e) => setInput(e.target.value)} type="text" name='qr-code' value={input} placeholder='Enter your value here' />
                <button className='bg-green-500 text-white p-3 rounded-lg cursor-pointer                 ' disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div className='flex justify-center items-center'>
                <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='white'/>
            </div>
        </div>
    )
}

export default QrCodeGenerator