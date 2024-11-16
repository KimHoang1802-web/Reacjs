import React, { useState } from 'react'

const ChangeColorCard = () => {

    const [image, setImage] = useState("./img/product/black-car.jpg");

    const handelChangColor = (color) => {
        let image = `./img/product/${color}-car.jpg`;
        setImage(image);
    }
    return (
    <div>
        <h1 className='mt-5 text-orange-600 font-black text-center text-4xl'>ChangeColorCard</h1>

        <div className='flex mt-5'>
            <div className='image w-1/2'>
                <img src={image} alt="" />
            </div>

            <div>
                <button className=' bg-black text-white p-4 mx-5' onClick={() => {
                    handelChangColor("black")
                }}>
                    Black Color
                </button>
                <button className=' bg-red-500 text-white p-4 mx-5' onClick={() => {
                    handelChangColor("red")
                }}>
                    Red Color
                </button>
                <button className=' bg-slate-500 text-white p-4 mx-5'onClick={() => {
                    handelChangColor("silver")
                }}>
                    Sliver Color
                </button>
                <button className=' bg-teal-500 text-white p-4 mx-5'onClick={() => {
                    handelChangColor("steel")
                }}>
                    Steel Color
                </button>
            </div>
        </div>
    </div>
    )
}

export default ChangeColorCard