import { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    }
  }

  render () {
    const {article} = this.props;
    const body = <section>{article.text}</section>

    const handleClick = () => {
      console.log(this.state);
    }

    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={handleClick}>close</button>
        {body}
        <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
      </div>
    )
  }
}

export default Article;
