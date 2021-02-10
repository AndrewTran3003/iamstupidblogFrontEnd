import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { renderToString } from "react-dom/server";

function FormatArticle(article:string) {
  let swapArray: string[][] = [];
  FormatCSharpCodeSyntax(article, swapArray);
  swapArray.forEach( i => article = article.replace(i[0], i[1]));
  return article;
}
function FormatCSharpCodeSyntax(article:string , swapArray: string[][]) {
  let beginReg = /<pre class="brush: plain; class-name: &#039;csharp-code code-block&#039;; title: ; notranslate" title="">/g;
  let beginString = `<pre class="brush: plain; class-name: &#039;csharp-code code-block&#039;; title: ; notranslate" title="">>`;
  let endReg = /<\/pre>/g;
  let endString = `</pre>`;
  let x, y;

  let beginOcc = [];
  let endOcc = [];

  while ((x = beginReg.exec(article)) != null) {
    beginOcc.push(x.index);
  }
  while ((y = endReg.exec(article)) != null) {
    endOcc.push(y.index);
  }

  for (let i = 0; i < beginOcc.length; i++){
    let oldValue = article.substring(
      beginOcc[i],
      endOcc[i] + endString.length
    );

    let newValue = renderToString(
      <SyntaxHighlighter language="csharp" style={a11yLight}>
        {oldValue
          .substring(beginString.length, oldValue.length - endString.length)
          .replace("&lt;", "<")
          .replace("&gt;", ">")}
      </SyntaxHighlighter>
    );
    let element = [oldValue,newValue];
    swapArray.push(element);
    
  }
}
type params = {
    content: string;
    
};

const Article = (params: params):any => {
  let articleInfo = params.content;
  let articleRendered = FormatArticle(articleInfo);
  return (
    <>
      <main>
        <div className="article-body">
          <div dangerouslySetInnerHTML={{ __html: articleRendered }} />
        </div>
      </main>
    </>
  );
};

export default Article;
