import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <div>
                <span onClick={this.props.onClickHandler}>{this.props.children}</span>
            </div>
        );
    }
}

export default Button;