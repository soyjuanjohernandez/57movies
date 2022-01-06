import React from 'react';
import './button.scss';

const Button = (props) => {
  const { name, id, onClick, children, className, appearance, style, title, type } = props;
  return (
    <button
      id={id || null}
      type={'button' || type}
      className={`btn__container btn__${appearance} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
    >
      {name || 'Button'}
      {children || null}

    </button>
  );
};

export default Button;
