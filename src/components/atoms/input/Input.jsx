import React from 'react';
import './input.scss';

const Input = (props) => {
  const { name, id, onClick, children, className, appearance, type, style, title, } = props;
  return (
    <input
      id={id || null}
      type={ 'text' || type}
      className={`input__container ${className}`}
      style={style}
      title={title || "input placeholder"}
      placeholder={title || "input placeholder"}
    />

  );
};

export default Input;
