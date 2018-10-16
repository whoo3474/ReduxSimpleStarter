import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSerch from 'youtube-api-search';

import reducers from './reducers';
import SerchBar from './components/serch_bar'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY='AIzaSyBnpaJOsm8xiMvS-rABQLAYJYO45V4adVQ';

YTSerch({key:API_KEY, term:'serfboards'},function(data){
  console.log(data);
});

const App = () =>{
  return(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <SerchBar />
  </Provider>    
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'));
