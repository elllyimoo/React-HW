import React from 'react';
import './Input.scss';
import {useField} from 'formik';

const Input = (props) => {
    const {name, label, type, autoComplete=""} = props;
    const [field, meta] = useField(name);   // [field, meta, helpers] // console.log('field', field)   // console.log('meta', meta)

    return (
        <>
            <div className="input-box">
                <label className="label">
                    {label}
                    <input className="input" type={type} autoComplete={autoComplete} size='30' {...field}/>
                </label>
                <div className="error">{meta.error}</div>
            </div>

        </>
    )
}

export default Input;
