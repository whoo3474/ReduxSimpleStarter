import React,{Component} from 'react';

class SerchBar extends Component{
  constructor(props){
    super(props);

    this.state={term : ''};
  }
 
  
  render(){
    return (
      <input onChange={this.onInputChange}/>
    )
  }

  onInputChange(e){
    this.setState({
      term:e.target.value
    })
    console.log(e.target.value);

  }
}

export default SerchBar;