import React from 'react';
import './Button.css';

class Button extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <span
                    className="button"
                    onClick={() => this.props.onClickHandler()}
                >
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default Button;