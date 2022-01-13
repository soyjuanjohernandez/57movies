import React from 'react';
import './input.scss';

const Input = (props) => {
  const { name, id, className, type, style, title, onChange } = props;
  return (
    <input
      id={id || null}
      type={ type || 'text'}
      className={`input__container ${className}`}
      style={style}
      title={title || "input placeholder"}
      placeholder={title || "input placeholder"}
      onChange={onChange}
    />

  );
};

export default Input;
