import React, { useEffect, useState } from "react";
import ArticlesList from "../components/ArticlesList";
import Heading from "../components/Heading";
import LoadingException from "../components/LoadingException";
import LoadingHelper from "../helper/LoadingHelper";

/*

.then((response) => {
            response.json();
        })
        .then((json) => {
          let objLength = Object.keys(json).length;

          for (let i = 0; i < objLength; i++) {
            let currentArticle = {};
            currentArticle.id = Object.values(json)[i].id;
            currentArticle.title = Object.values(json)[i].title.rendered;
            currentArticle.excerpt = Object.values(json)[i].excerpt.rendered;
            result.push(currentArticle);
          }
          setArticles(result);
        }); 


*/
type article = {
  id: string;
  title: string;
  excerpt: string;
};

type content = {
  status: string;
  content: Array<article>;
};

const ArticlesListPage = () => {
  let defaultArticle: content = { status: "loading", content: [] };
  const [articles, setArticles] = useState<content>(defaultArticle);
  useEffect(() => {
    console.log(2);
    console.log(3);

    console.log(3.1);

    let fetchData: Promise<content> = fetch(
      `http://localhost/wordpress/wp-json/wp/v2/articles/`
    )
      .then((response: any) => response.json())
      .then((json: [{}]) => {
        let result: content = { status: "loading", content: [] };
        if (json.length > 0) {
          result.status = "loaded";
          result.content = MapData(json);
        }
        else{
          result.status = "no-data";
        }

        console.log("here is the result");
        console.log(json);
        console.log(result);
        return result;
      });
    LoadingHelper.LoadAsset(fetchData, setArticles, "article-list");

    console.log(articles);
  }, []);

  function MapData(json: any[]): Array<article> {
    let result = new Array<article>();

    let objLength = json.length;
    result = [];
    for (let i = 0; i < objLength; i++) {
      let currentArticle: article = { id: "", title: "", excerpt: "" };
      currentArticle.id = json[i].id;
      currentArticle.title = json[i].title.rendered;
      currentArticle.excerpt = json[i].excerpt.rendered;
      result.push(currentArticle);
    }

    console.log(result);
    return result;
  }

  let pageContent = {};
  let pageHeading: string = "";
  let pageDescription: string = "";

  if (articles.status === "loaded") {
    console.log("Loaded");
    console.log(articles);
    if (articles.content[0] != undefined) {
      console.log(7);
      pageContent = <ArticlesList articles={articles.content} />;
      pageHeading = "Articles List";
      pageDescription = "Here are the available articles";
    } else {
      console.log(6);
      pageContent = <LoadingException status="loading" />;
    }
  } else {
    console.log(1);
    pageContent = <LoadingException status={articles.status} />;
  }

  return (
    <React.Fragment>
      <Heading heading={pageHeading} description={pageDescription} />

      {pageContent}
    </React.Fragment>
  );
};
export default ArticlesListPage;
