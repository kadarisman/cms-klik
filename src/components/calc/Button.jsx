import { useState, useEffect } from "react"
const Button = ({tambah, kali, bagi, deleteValue }) => {

    const handleKali = () => {
        kali()
    } 

    const handleBagi = () => {
        bagi()
    }

    const handleTambah = () => {
        tambah()
    }

    const handleDeleteValue = () => {
        deleteValue()
    }

    return (
        <>
            <div className="container w-full flex flex-row gap-5 justify-center mt-4">
                <button type="submit" className="gradient text-white text-4xl font-bold my-1 py-1 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={handleKali}>
                    X
                </button>
                <button type="submit" className="gradient text-white text-4xl font-bold my-1 py-1 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={handleBagi}>
                    /
                </button>
                <button type="submit" className="gradient text-white text-4xl font-bold my-1 py-1 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={handleTambah}>
                    +
                </button>
                <button type="submit" className="gradient text-white text-4xl font-bold my-1 py-1 px-20 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={handleDeleteValue}>
                    C
                </button>
            </div>
        </>

    )
}
export default Button