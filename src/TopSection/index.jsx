import React from "react";
import { CheckImage } from "../assets/images/CheckImage";
import { TodoCounter } from "../TodoCounter";
import './TopSection.css'




const TopSection = () => {

    return (
        <div className="top-section">
            <div className="check-image">
                <CheckImage />
            </div>
            <div className="todo-counter">
                <TodoCounter/>
            </div>
        </div>
    );
};


export {TopSection};