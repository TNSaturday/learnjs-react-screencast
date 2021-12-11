import Article from "./Article";

export default function ArticleList({ articles }) {
  const articlesList = articles.map(el => {
    return <li className="list-group-item" key={el.id}><Article article={el}/></li>;
  });
  return (
    <ul className="list-group">
      {articlesList}
    </ul>  
  )
}
