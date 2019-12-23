import React from 'react';
import './style.css';

const Input = ({prepend, append,...rest}) => (
  <div className="input-group mb-3">
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" {...rest}/>
  </div>
);

Input.defaultProps={
  prepend:null,
  append:null,
}

export default Input;
