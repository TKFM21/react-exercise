import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendBodyToParent = this.sendBodyToParent.bind(this);
    }

    sendBodyToParent() {
        const trimBody = this.state.body.trim();
        if (!trimBody) {
            alert('何も入力されていません');
            return;
        }
        this.props.onSubmit(trimBody);
        this.setState({
            body: '',
        });
    }

    handleChange(event) {
        this.setState({
            body: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <label>
                    <textarea onChange={this.handleChange} value={this.state.body}></textarea>
                </label>
                <br />
                <Button onClickHandler={this.sendBodyToParent}>コメントする</Button>
            </div>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Form;