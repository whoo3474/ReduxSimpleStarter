import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSerch from 'youtube-api-search';

import reducers from './reducers';
import SerchBar from './components/serch_bar'
import VideoList from './components/video_list';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY='AIzaSyBnpaJOsm8xiMvS-rABQLAYJYO45V4adVQ';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos:[]
    };

    YTSerch({key:API_KEY, term:'pinkfong'},(videos)=>{
      this.setState({videos});
    });
  }
  render(){
    return(
    //<Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <SerchBar />
      <VideoList videos={this.state.videos} />
      </div>
    //</Provider>    
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
