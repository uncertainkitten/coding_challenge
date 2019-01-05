import React from 'react';
import Checkbox from './checkbox';

class NewHobbyIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hobby: this.props.hobby
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return(
      <div className="hobby-item">
        <input className="emp-input" value={this.state.hobby} onChange={this.update("hobby")} />
      </div>
    )
  }
}