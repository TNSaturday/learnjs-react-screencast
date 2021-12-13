import ArticleList from './ArticleList';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';
import React, { PureComponent } from 'react';

class App extends PureComponent {
  state = {
    reverted: false,
  };

  revert = () => this.setState({
      reverted: !this.state.reverted
    });

  render() {
    return (
      <div className="container">
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <h1 className="display-4">
            App name
            <button className='btn btn-primary float-end' onClick={this.revert}>
              Revert
            </button>
          </h1>
        </div>
        <ArticleList articles={this.state.reverted ? [...articles].reverse() : articles}/>
      </div>
    )
  }
  
}

export default App;
