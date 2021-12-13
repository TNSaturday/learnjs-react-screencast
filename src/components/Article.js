import React, { Component } from "react";

class Article extends Component {
  state = {
    isOpen: this.props.defaultOpen,
  }

  componentDidUpdate(prevProps) {
    if (this.props.defaultOpen !== prevProps.defaultOpen) {
      this.setState({
        isOpen: this.props.defaultOpen
      });
    }
  }

  render() {
    const {article} = this.props;
    const body = this.state.isOpen && 
      <section className="card-text">{article.text}</section>;

    const handleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    return (
      <div className="card mx-auto" style={{width: '75%'}}>
        <div className="card-header">
          <h2>
            {article.title}
            <button 
              className="btn btn-primary float-end" 
              onClick={handleClick}
            >
              {this.state.isOpen ? 'close' : 'open'}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <p className="text-muted">
            {article.id}
          </p>
          <h6 className="card-subtitle text-muted">
            Creation date: {(new Date(article.date)).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    )
  }
}

export default Article;
