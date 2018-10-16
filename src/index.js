import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSerch from 'youtube-api-search';

import reducers from './reducers';
import SerchBar from './components/serch_bar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList videos={this.state.videos} />
      </div>
    //</Provider>    
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
