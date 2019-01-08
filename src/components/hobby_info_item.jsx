import React from 'react';

class HobbyInfoItem extends React.Component{
  render(){
    return(
      <div className="hobby-info">
        <input className="emp-check" type="checkbox" onChange={(e) => this.props.toggleCheckbox(this.props.index)} checked={this.props.checked}/>
        <span className="emp-label">{this.props.hobbyText}</span>
      </div>
    )
  }
}

export default HobbyInfoItem;