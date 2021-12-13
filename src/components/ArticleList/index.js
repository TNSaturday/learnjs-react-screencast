import Article from "../Article";
import './style.css';
import React, {PureComponent} from "react";

class ArticleList extends PureComponent {
  render() {
    const articlesList = this.props.articles.map((el, index) =>
        <li className="list-group-item" key={el.id}>
          <Article article={el} defaultOpen={index === 0} />
        </li>
    );
    return (
        <ul className="list-group">
          {articlesList}
        </ul>
    )
  }
}

export default ArticleList;
