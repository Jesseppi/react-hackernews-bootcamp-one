import React from 'react';
import ReactDOM from 'react-dom';

import NewsFeed from "./Component/NewsFeed/"

var articleTitle = "FAKE NEWS ARTICLE";
var articleDescription = 
"In today's connected world, it is rare to find an application or piece of malware that doesn't talk to a remote server. Let's control this!" +
"LuLu is the free open-source macOS firewall that aims to block unknown outgoing connections, unless explicitly approved by the user.";
var articleLink = "https://news.ycombinator.com/";

var articles = [
    {
        title:articleTitle, 
        description:articleDescription,
        link:articleLink, 
        index: 1
    }
];

const root = document.getElementById('root');

ReactDOM.render(<NewsFeed articles={articles}/>, root);