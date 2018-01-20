import React from "react";
import ReactDom from "react-dom";
import styles from './styles.css';
import Article from "../Article/";
import HackerTitle from "../HackerTitle/";

var hackerString = "Hello Hacker News";

export default function NewsFeed(props){
    return(
        <div>
        {props.articles.map(value => (
            <Article key={value.id}
                title ={value.title}
                description = {value.description}
                link = {value.url}
            />      
        )
    )
        }
        </div>            
    )
  }