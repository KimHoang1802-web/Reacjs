import React from "react";
import HeaderBaiTap from "./HeaderBaiTap";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

const BaiTap1 = () => {
    return <div className="container mx-auto">
        <h1>Bài tập 1</h1>

        <div className="wrapper">
            <HeaderBaiTap />

            <div className="body flex">
                <Navigation/>
                <Content />
            </div>

            <Footer/>
        </div>
    </div>
};

export default BaiTap1;
