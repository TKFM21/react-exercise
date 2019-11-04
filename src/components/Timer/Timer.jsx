import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: props.seconds
        };

        window.setInterval(() => {
            this.setState({
                seconds: this.state.seconds - 1
            });
        }, 1000);
    }

    render() {
        return <div>{this.state.seconds} / {this.props.seconds}</div>
    }
}

export default Timer;