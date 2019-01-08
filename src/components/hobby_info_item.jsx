import React from 'react';

class HobbyInfoItem extends React.Component{
  render(){
    return(
      <div className="hobby-info">
        <span className="emp-label">{this.props.hobbyText}</span>
      </div>
    )
  }
}

export default HobbyInfoItem;