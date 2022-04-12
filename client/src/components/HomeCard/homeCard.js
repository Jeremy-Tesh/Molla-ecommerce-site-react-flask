import React from 'react';

function HomeCard(props) {
    return (
        <div
            className="m-4"
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',

                height: '377px',
                width: '277px',
                padding: '20px'
            }}
        >
            <p className="bg-[#a6c76c] text-white text-center mb-2  w-10">
                New
            </p>

            <p className="bg-[#ef837b] text-white text-center w-10">Sale</p>
        </div>
    );
}

export default HomeCard;
