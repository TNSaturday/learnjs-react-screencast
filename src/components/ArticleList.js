import Article from "./Article";

export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map(el => <li key={el.id}><Article article={el}/></li>)}
    </ul>  
  )
}
