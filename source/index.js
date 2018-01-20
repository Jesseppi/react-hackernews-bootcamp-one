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

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = 
    { 
      text:[]
    };
  }
  componentWillMount(){
    console.log("hello world");
    setTimeout(() =>
      this.setState(
        {
          text : articles
        }
      ),
      1000
    );
    }  
  render(){
    return(
      <NewsFeed articles={this.state.text}/>      
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);