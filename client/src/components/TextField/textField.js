import TextField from '@mui/material/TextField';
import React from 'react';

const TextBox = (props) => {
    return (
        <div className="mb-5">
            <TextField
                label={props.label}
                id="outlined-size-small"
                // defaultValue=""
                name={props.name}
                size="small"
                type={props.type}
                fullWidth
                value={props.value}
                ref={props.ref}
            />
        </div>
    );
};

export default TextBox;
