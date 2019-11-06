import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
};

export default Button;