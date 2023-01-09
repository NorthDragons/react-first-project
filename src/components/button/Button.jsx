import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";


const Button = ({children, onClick, className, disabled, active, name,value}) => {
    const classes = classNames(
        'brn', className, {active}
    );
    return (
        <button role={"button"} name={name} className={classes} value={value} disabled={disabled} onClick={onClick}>{children}</button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
}

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {
    },
    className: '',
    disabled: false,
    active: false,
}

export default Button;