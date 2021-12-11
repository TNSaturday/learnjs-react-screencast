import { Component } from "react";

class Article extends Component {
  state = {
    isOpen: false,
  }

  render () {
    const {article} = this.props;
    const body = this.state.isOpen && <section>{article.text}</section>;

    const handleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    return (
      <div className="card">
        <div className="card-header">
          <h2>{article.title}</h2>
          <button onClick={handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </div>
        
        {body}
        <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
      </div>
    )
  }
}

export default Article;
