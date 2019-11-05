import React from 'react';
import './App.css';
import Form from './Form/Form';
// import Button from '../Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(comment) {
    const comments = this.state.comments.slice();
    this.setState({
      comments: comments.concat(comment),
    });
  }

  render() {
    return (
      <div>
        <Form onClickHandler={(comment) => this.onClickHandler(comment)} />
        {/* <Button
          onClickHandler={this.onClickHandler}
        >
          Input!
        </Button> */}
      </div>
    );
  }
}

export default App;