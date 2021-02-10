import { match } from "assert";
import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import Heading from "../components/Heading";
import LoadingException from "../components/LoadingException";
import LoadingHelper from "../helper/LoadingHelper";

type response = {
  match: {
    params: {
      name: string;
    };
  };
};


type articleInfo = {
  status: string;
  title: string;
  excerpt: string;
  content: string;
};

const ArticlePage = (response: response): any => {
  console.log(response.match.params.name);
  const id = response.match.params.name;
  //const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({
    status: "Loading",
    title:  "",
    content:  "",
    excerpt: "",
  });
  useEffect(() => {
    let fetchData: Promise<articleInfo> = fetch(
      `http://localhost/wordpress/wp-json/wp/v2/articles/${id}`
    )
      .then((response) => response.json())
      .then((json: any) => {
        const result: articleInfo = {
          status: "loading",
          title: "",
          content: "",
          excerpt: "",
        };
        if (json.content.rendered.length !== 0) {
          result.status = "loaded";
          result.content = json.content.rendered;
          result.title = json.title.rendered;
          result.excerpt = json.excerpt.rendered;
          console.log(json);
        } else if (json.content.rendered.length === 0) {
          result.status = "no-content";
        } else {
          result.status = "error";
        }

        return result;
      });

    LoadingHelper.LoadAsset(fetchData, setArticleInfo, "article");
  }, [id]);

  let pageContent: {} = {};
  let pageHeading: string = "";
  let pageDescription: string = "";
  if (articleInfo.status === "loaded") {
    pageContent = (
      <div className="container" id="article-content">
        <Article content={articleInfo.content}/>
      </div>
    );
    pageHeading = articleInfo.title;
    pageDescription = articleInfo.excerpt;
  } else {
    pageContent = <LoadingException status={articleInfo.status} />;
  }
  return (
    <React.Fragment>
      <div id="wrapper">
        <Heading heading={pageHeading} description={pageDescription} />

        {pageContent}
      </div>
    </React.Fragment>
  );
};

export default ArticlePage;
/*


type match = {
  match: {
    params: {
      name: string;
    };
  };
};


        <p>{articleInfo.content.rendered}</p>

<UpvoteSection
        articleName={name}
        upvotes={articleInfo.upvote}
        setArticleInfo={setArticleInfo}
      />
const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
      <ArticleList articles={otherArticles} />
      <CommentsList comments={articleInfo.comments} />

       <h2>Related content</h2>
       {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}


      let time1 = new Date().getTime();
    fetchData();
    let time2 = new Date().getTime();

    if(time2 - time1 < 100){
      setTimeout(() => {
        fetchData().then((result) => setArticleInfo(result));
      }, 100 - (time2 - time1));
    }
*/
