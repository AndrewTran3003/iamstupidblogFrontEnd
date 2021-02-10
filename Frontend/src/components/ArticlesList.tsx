import React from "react";
import { Link } from "react-router-dom";

type article = {
  id: string;
  title: string;
  excerpt: string;
};

const ArticlesList = (props: { articles: Array<article> }) => {
  let x = (
    <ul className="article-list">
      {props.articles && props.articles.map((article, index) => {
        return (
          <li key={article.id}>
            <Link
              className="article-list-item"
              key={index}
              to={`/article/${article.id}`}
            >
              <h3>{article.title}</h3>
              <div
                className="excerpt"
                dangerouslySetInnerHTML={{ __html: article.excerpt }}
              ></div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <>
      {x}
    </>
  );
};

export default ArticlesList;

/*
if (articles.length === 0) {
    console.log("No");

    return <NotFoundPage />;
  } else {
    console.log("Yes");
    console.log(Object.values(articles));
    console.log(articles);

  }
const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/wordpress/wp-json/wp/v2/articles/`).then(
      (response) =>
        response.json().then((json) => {
          let objLength = Object.keys(json).length;
          var result = [];
          for (let i = 0; i < objLength; i++) {
            let currentArticle = {};
            currentArticle.id = Object.values(json)[i].id;
            currentArticle.title = Object.values(json)[i].title.rendered;
            currentArticle.excerpt = Object.values(json)[i].excerpt.rendered;
            result.push(currentArticle);
          }
          setArticles(result);
        })
    );
  }, []);
fetchPostData(){
        fetch(`http://localhost/wordpress/wp-json/wp/v2/articles/`)
        .then(response => response.json())
        .then(myJSON => {
            let objLength = Object.keys(myJSON).length;
            let newState = this.state;
            for (let i = 0; i < objLength; i++){
                let objKey = Object.values(myJSON)[i].id;
                let currentArticle = {};
                currentArticle.id = Object.values(myJSON)[i].id;
                currentArticle.title = Object.values(myJSON)[i].title.rendered;
                currentArticle.excerpt = Object.values(myJSON)[i].excerpt.rendered;
                newState.data[objKey] = currentArticle;
            }
            this.setState(newState);
            console.log(this.state);
        })
        
        ;
    }
     const populatePageAfterFetch = (article, index) => {
    if (this.state.data) {
      return (
        <li>
          <Link
            className="article-list-item"
            key={index}
            to={`/article/${article.id}`}
          >
            <h3>{article.title}</h3>
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: article.excerpt }}
            ></div>
          </Link>
        </li>
      );
    }
  };

  const renderedArticles = () => {
    if (articles.data) {
      const articlesArray = Object.values(articles.data);
      return Object.values(articlesArray).map((article, index) =>
        populatePageAfterFetch(article, index)
      );
    }



*/
