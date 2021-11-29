import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Heading from './Heading';
import Para from './Para';
import List from './List';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<>
<Heading/>
<Para/>
<List/>

</>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
