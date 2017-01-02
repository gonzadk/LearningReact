import React from 'react'  
import EmployeeRow from '../employee-row'

class EmployeeList extends React.Component {

  render() {
    return (
      <ul className="media-list">
        {
          this.props.listado.map((employee) => {
            return <EmployeeRow key={ employee.id }
                                name={ employee.fullName }
                                picture={ employee.pic }
                                title={ employee.title }
                                department={ employee.department } />
          })
        }
      </ul>
    )
  }
}

export default EmployeeList