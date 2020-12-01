// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
state = {
  name: ""
}

handleOnChange = e => {
  this.setState({
    name: e.target.value
  })
}

handleOnSubmit = e => {
  e.preventDefault();
  this.props.addBand(this.state.name)

this.setState({
  name:""
})
}




  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name </label>
          <input type= 'text'
          name = "name"
          placeholder= "enter a new name"
          value = {this.state.name}
          onChange= { this.handleOnChange}/>
          <input type = "submit" value = "Add Band"/>
        </form>
      </div>
    )
  }
}

export default BandInput
