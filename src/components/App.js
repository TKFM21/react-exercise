import React from 'react';
import Form from './Form/Form';
import CommentList from './CommentList/CommentList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ['初期コメント'],
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(data) {
    const comments = this.state.comments.slice();
    this.setState({
      comments: comments.concat(data),
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={(data) => this.addComment(data)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
