import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.setState({
            [field]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onClickHandler(this.state.comment);
        this.setState({
            comment: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea
                        type="text"
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <input type="submit" value="Add"></input>
            </form>
        );
    }
}

export default Form;