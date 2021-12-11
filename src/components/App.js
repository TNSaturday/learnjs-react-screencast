import ArticleList from "./ArticleList";
import articles from '../fixtures';

export default function App() {
  return (
    <div>
      <h1>App name</h1>
      <ArticleList articles={articles}/>
    </div>
  )
}
