import React from "react";
import ReactDom from "react-dom";
import styles from './styles.css';


// Title Component
export default function HackerTitle(props) {
  return (
    <div className={styles.title}>
      {props.message} 
    </div>
  );
}  