import React from 'react'

const Event = () => {
  const handelLike = (e) => {
    console.log("e handelLike: ", e);
  };

  const handelPage = (number, e) => {
    console.log("number: ", number, e);
    e.target.style.background = "red";
  };
  return (
    <div>
        <h1 className='text-center text-2xl text-lime-500'>Event</h1>
        {/* envent nhận vào 1 calback function */}
        <button className='bg-green-300 text-white p-4'onClick={(e) =>{
            console.log("click me", e);
        }}>
            Click me !!!
        </button>

         {/* khi gọi hàm trong onClick sẽ không có () như ở html vì react sẽ hiểu là cú pháp databinding nên sẽ gọi hàm chạy luôn ngay khi render */}
        <button
                className="block my-2 bg-green-500 text-white p-4"
                onClick={handelLike}
            >
                Click me call method handleLike !!!
        </button>
        {/* Khi cần truyền tham số vào hàm calback thì muợn anonymos function */}
        {/* cloure function */}
        <button className='bg-green-300 text-white p-4'
        onClick={(e) => {
          console.log("e: ", e);
          handelPage(1, e)
        }}> 1
        </button>
        <button className='bg-green-300 text-white p-4'
        onClick={(e) => {
          console.log("e: ", e);
          handelPage(2, e)
        }}> 2
        </button>
        <button className='bg-green-300 text-white p-4'
        onClick={(e) => {
          console.log("e: ", e);
          handelPage(3, e)
        }}> 3
        </button>
        
    </div>
  )
}
export default Event