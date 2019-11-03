import React from 'react';

const titleStyle = {
  backgroundColor: 'red'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 'test-state1'
    };
  }

  render() {
    return (
      <div className="App">
        <h1 style={titleStyle}>Hello world.</h1>
      </div>
    );
  }
}

export default App;