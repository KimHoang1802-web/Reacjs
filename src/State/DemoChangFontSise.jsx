import React, { useState } from 'react'

const DemoChangFontSise = () => {
    

    const [fontSize, setFontSize] = useState(20);
    const [bg, setBg] = useState("black");
    return (
    <div>
        <h1 className='text-center text-purple-700 font-black text-4xl mt-5'>DemoChangFontSise</h1>


        {/* demo */}
        <p className='mt-5 text-pink-700 font-thin' style={{fontSize: fontSize, background: bg}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam et similique voluptates quam fugiat harum molestiae assumenda. Voluptates distinctio enim exercitationem explicabo praesentium iure quos quis qui itaque laborum, amet deserunt similique in iusto vero nulla quia autem odit quae!</p>

        <div className='mt-5'>
            <button className='bg-orange-700 text-white p-4 mx-2' onClick={() => {
                setFontSize(fontSize - 1);
                setBg("pink")
            }}>zoom in</button>
            <button className='bg-orange-700 text-white p-4 mx-2'
            onClick={() => {
                setFontSize(fontSize + 1)
                setBg("black")
            }}>zoom out</button>
        </div>
    </div>
    )
}

export default DemoChangFontSise