import React from 'react';
import Checkbox from './checkbox';

class HobbyIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hobby: this.props.hobby
    }
  }

  render(){
    return(
      <div className="hobby-item">
        <Checkbox label={this.state.hobby} />
        <label className="emp-label">{this.state.hobby}</label>
      </div>
    )
  }
}