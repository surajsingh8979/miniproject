import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





let currDate = new Date();
currDate = currDate.getHours();
let greeting = ""

const cssStyle = {};



if (currDate >= 1 && currDate < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'Orange';
} else if (currDate >= 12 && currDate < 19) {
    greeting = 'Good AfterNoon';
    cssStyle.color = 'brown';
} else {
    greeting = 'Good Night';
    cssStyle.color = 'blue';
}


ReactDOM.render( <> <div><h1> hello sir, <span style = {cssStyle}> {greeting} </span> </h1 ></div></>,
    document.getElementById('root')
);


