/*import React from "react";

const CommentsList = ({ comments: string[][username,text] = [] }) => (
  <>
    <h3>Comments:</h3>
    {comments.map((comment: string[], key:number) => (
      <div className="comment" key={key}>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </>
);
export default CommentsList;
*/
/*import React from 'react';
import { Link } from "react-router-dom";

const ArticleList = ({articles}) => {
  return (
    <React.Fragment>
      <ul className="article-list">
        {articles.map((article, key) => (
          <li>
            <Link
              className="article-list-item"
              key={key}
              to={`/article/${article.name}`}
            >
              <h3>{article.title}</h3>
              <div className="content">
                <p>{article.content[0].substring(0, 150)}...</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ArticleList;
*/