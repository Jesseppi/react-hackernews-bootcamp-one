import React from 'react';
import ReactDOM from 'react-dom';

var hackerString = "Hello Hacker News";
var alertText = "Here is an alert";

/* const element = React.createElement(
  'div', // the type of element we're creating
  null, // any props ('attributes') we're giving it
  'Hello Hacker News' // The children of this element.
); */

const element = <div 
style={{fontSize:36, color: 'green'}}
onClick={() => window.alert(alertText)}
>{hackerString}</div>;

/* const number = 19;
const element = React.createElement(
  'div',
  null,
  number
); */

const root = document.getElementById('root');

ReactDOM.render(element, root);