import React from 'react'

class EmployeeAvatar extends React.Component {  
  render() {
      return (
      <figure className="media-left">
        <img className="media-object" width="64px" src={`img/${this.props.picture}`} />
      </figure>
    )
  }
}

export default EmployeeAvatar