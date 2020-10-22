import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let getTime = new Date();
getTime = getTime.getHours();
let greating ='';

//inline css
const cssStyle = {};

if (getTime >= 1 && getTime < 12){
   greating ='Good Morning';
   cssStyle.color = 'green';
}else if(getTime > 12 && getTime <19){
   greating = 'Good afternoon';
   cssStyle.color = 'orange';
}else{
   greating ='Good Night';
   cssStyle.color = 'black';
}
ReactDOM.render(
  <> 
<div>
<h1>Hello sir,<span style ={cssStyle}>{greating}</span> </h1>
</div>
</>,
  document.getElementById('root'));