import TextField from '@mui/material/TextField';
import React from 'react';

function TextBox(props) {
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
                onChange={props.onChange}
            />
        </div>
    );
}

export default TextBox;
