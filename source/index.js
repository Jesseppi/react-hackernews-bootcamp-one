import React from 'react';
import ReactDOM from 'react-dom';

import Article from "./Component/Article/";
import HackerTitle from "./Component/HackerTitle/";

var hackerString = "Hello Hacker News";
var alertText = "Here is an alert";

var articleTitle = "FAKE NEWS ARTICLE";
var articleDescription = 
"In today's connected world, it is rare to find an application or piece of malware that doesn't talk to a remote server. Let's control this!" +
"LuLu is the free open-source macOS firewall that aims to block unknown outgoing connections, unless explicitly approved by the user.";
var articleLink = "https://news.ycombinator.com/";

function App (){
  return(
      <div>
        <HackerTitle 
          message={hackerString}
          />
        <Article
          title ={articleTitle}
          description = {articleDescription}
          link = {articleLink}
        />
        <Article
          title ={articleTitle}
          description = {articleDescription}
          link = {articleLink}
        />
        <Article
          title ={articleTitle}
          description = {articleDescription}
          link = {articleLink}
        />
      </div>
  )
}

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);