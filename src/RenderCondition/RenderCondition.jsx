import React from 'react'

const RenderCondition = () => {
    // false: chưa login
    // true: login rồi
    const isLogin = true;

    const renderLogin = () => {
        if (isLogin){
            return (
                <div>
                    <h3>Hello User</h3>
                    <ul>
                        <li>Thông tin cá nhân</li>
                        <li>Đổi mật khẩu</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            );

        }else{
            return <button>Đăng nhập</button>
        }
    }
return (
    <div>
        <h1 className='text-center text-blue-400 font-black text-4xl'>RenderCondition</h1>

        {renderLogin()}

        {/* {}: biding data: gọi dữ liệu ra */}
        {/* Nếu dùng toán tử 3 ngôi khi cần xử lý những điều kiện đơn giản */}
        {/* {isLogin ? <h3>Hello user</h3>: <button>Đăng nhập</button>} */}
        {/* Kết quả hiện ra đăng nhập vì isLogin = false
        Nếu kết quả hiện ra Hello user vì isLogin = true */}
    </div>
);
};

export default RenderCondition