import React from 'react';

function Button(props) {
    return (
        <div className="text-center my-5 p-1 text-white bg-button">
            <button type={props.type}>{props.value}</button>
        </div>
    );
}

export default Button;
