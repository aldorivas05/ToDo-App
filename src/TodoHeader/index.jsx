import React from "react";
import './TodoHeader.css'

function TodoHeader ({Children}) {
    return (
        <header>
            {Children}
        </header>
    );
};

export {TodoHeader};