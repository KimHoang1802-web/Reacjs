import React from "react";
import DemoCssChild from "./DemoCssChild";
import styles from "./style.module.css";

const DemoCss = () => {
    const styleObj = {
        color: "blue",
        fontSize: 20,
        background: "pink",
        fontWeight: 100,
    };

    return (
        <div>
            <h1 className="text-center text-blue-700 font-black text-4xl">Demo Css</h1>
            <p className="txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi ipsam eveniet enim sapiente ut molestiae nostrum commodi, nobis eum quae est, sit cupiditate quisquam quidem! Et, amet. Esse, perferendis?
            </p>

            <p className={`${styles.txt} ${styles.background}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed enim delectus tempore modi labore, aspernatur sit quas id, in natus corporis quos laborum dolores ipsam! Quae corporis totam explicabo sequi unde veniam debitis iure minima, iste fugiat sapiente aliquam.
            </p>

            <p style={styleObj}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam laborum iure, rem autem aut? Impedit laborum cupiditate quidem magnam quisquam totam, corporis soluta dolor eligendi ipsam, eos delectus iusto iste! Quis dicta ratione enim. Nam optio praesentium repudiandae provident incidunt id aperiam accusamus sed ullam nulla doloribus, iste magnam!
            </p>

            <DemoCssChild />
        </div>
    );
};

export default DemoCss;
