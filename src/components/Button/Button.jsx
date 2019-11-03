import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <span className="Button-container">
                { this.props.children }
            </span>
        );
    }
}

export default Button;