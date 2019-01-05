import React from 'react';

class Checkbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      label: this.props.label,
      isChecked: false
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange(e){
    e.preventDefault();
    this.setState({isChecked: !this.state.isChecked});
  }

  render(){
    return(
      <div className="checkbox">
        <input
        type="checkbox"
        value={this.state.label}
        checked={this.state.isChecked}
        onChange={this.toggleCheckboxChange}
        />
      </div>
    )
  }
}