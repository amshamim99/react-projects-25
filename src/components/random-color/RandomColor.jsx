import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const [typeOfColor, settypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(lenght) {
        return Math.floor(Math.random() * lenght)
    }
    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }
    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(255);
        const g = randomColorUtility(255);
        const b = randomColorUtility(255);

        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);

    return (
        <div style={{
            height: "100vh",
            weigth: "100vw",
            background: color

        }} className='text-center space-x-2'>
            <button onClick={() => settypeOfColor("hex")} className='bg-white py-2 px-10 cursor-pointer border border-black'>Create HEX Color</button>
            <button onClick={() => settypeOfColor("rgb")} className='bg-white py-2 px-10 cursor-pointer border border-black'>Create RGB Color</button>
            <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor} className='bg-white py-2 px-10 cursor-pointer border border-black'>Create Random Color</button>
            <div className='flex flex-col justify-center items-center gap-10 text-white text-5xl mt-10'>
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor