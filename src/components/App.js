import ArticleList from "./ArticleList";
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="container">
      <div className="mt-4 p-5 bg-secondary text-white rounded">
        <h1 className="display-4">App name</h1>
      </div>
      <ArticleList articles={articles}/>
    </div>
  )
}
