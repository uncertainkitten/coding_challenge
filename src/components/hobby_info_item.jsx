import React from 'react';

class HobbyInfoItem extends React.Component{
  render(){
    return(
      <div className="hobby-info">
        <input type="checkbox" onChange={(e) => this.props.toggleCheckbox(this.props.key)}/>
        <span className="emp-label">{this.props.hobbyText}</span>
      </div>
    )
  }
}

export default HobbyInfoItem;