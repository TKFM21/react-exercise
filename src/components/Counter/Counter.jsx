import React from 'react';
import Button from '../Button/Button';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClickInc() {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleClickDec() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <p>{ this.state.count }</p>
                <span onClick={ () => this.handleClickInc() }>
                    <Button>Inc</Button>
                </span>
                <span onClick={() => this.handleClickDec()}>
                    <Button>Dec</Button>
                </span>
            </div>
        )
    }
}

export default Counter;