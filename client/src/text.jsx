import React, { useEffect, useState } from 'react';

function Text() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch('/product/hello')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.log(err));
    }, []);

    return <div>{message}</div>;
}

export default Text;
