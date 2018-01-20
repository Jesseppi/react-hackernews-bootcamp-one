import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from "./Component/NewsFeed/";
import getArticles from 'hacker-news-top-ten'

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
      articles:[]
    };
    this.loaded = false;
  }
  componentWillMount(){    
    getArticles().then(articles => {
      this.setState({ articles })      
    });
    this.state.loaded = true;
    }  
  render(){
    return this.state.loaded ?(
    <NewsFeed articles={this.state.articles} />) :
    (<div> Loading . . . </div>)          
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);