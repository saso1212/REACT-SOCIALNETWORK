import React from 'react';

const button = (props) =>
    <button
        type={props.type}
        className={props.classNameProps}
        onClick={props.clicked}>
        {props.title}
    </button>;

export default button;