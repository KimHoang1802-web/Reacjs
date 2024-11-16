import React, { useState } from 'react'
// hook là tên gọi của những hàm sử dụng trong component của react
const DemoState = () => {
    // useState nhận vào 1 giá trị default
    /*
    const res = useState(20)
    console.log("res: ",res);

    // Khi gọi useState, res sẽ trả về arr có 2 phần tử
    // const [number, setNumber ] = res;
        */
    const [number, setNumber] = useState(20)
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-blue-400 text-4xl'>DemoState</h1>

            <div className='flex justify-center'>
            <button className='bg-black text-white p-4 'onClick={() => {
                setNumber(number - 1);
            }}>-</button>

            <p className='text-4xl text-lime-600 mx-4'>{number}</p>

            <button className='bg-black text-white p-4 'onClick={() => {
                setNumber(number + 1);
            }}>+</button>
        </div>
        </div>

        
    )
}

export default DemoState

// ôn tập ES6
/*
let obj = {
    id: 1,
    fullName: "abc",
};
obj.id;
obj.fullName;
*/
