import React from "react";
import ReactDom from "react-dom";
import styles from './styles.css';
import classNames from 'classnames';


var titleClassNames = classNames({
    [styles.articleTitleClass] :true,
    [styles.a]: true
});

// Article component
export default function Article (props)
{
  return(
    <article className={styles.articleBlock}>
      <div className={styles.articleHeaderBlock}>
      <a href={props.link} className={titleClassNames}>{props.title}</a>
      </div>
      <div className={styles.articleText}>{props.description} </div>      
    </article>
  );
}