import React from 'react';
import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=10';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null
    };
  }

  async requestData() {
    this.setState({loading: true});
    let fetchData;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      fetchData = data.results;
    } catch (error) {
      fetchData = null;
    }

    this.setState({
      loading: false,
      data: fetchData
    });
  }

  render() {
    return (
      <div>
        { this.renderRequestButton() }
        { this.renderData() }
      </div>
    );
  }

  renderData() {
    if (this.state.loading) {
      return <p>データ取得中。。。</p>;
    }
    if (!this.state.data && !this.state.loading) {
      return <p>データなし</p>;
    }

    const quizList = this.state.data.map( (quiz, index) => {
      const quizKey = index + 1;
      return <li key={quizKey}>Q{quizKey}. {quiz.question}</li>;
    });
    return <ul>{ quizList }</ul>;
  }

  renderRequestButton() {
    if (this.state.loading) {
      return <button disabled>データ取得中。。。</button>;
    }
    return <button onClick={ () => this.requestData() }>データを取得する</button>;
  }
}

export default App;