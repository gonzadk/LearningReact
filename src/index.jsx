import ReactDOM from 'react-dom'  
import React from 'react' 
import EmployeeList from './components/employee-list'

let employees = [  
  { id: 1, fullName: "Dwayne Smith", title: "CEO", department: "Business", pic: "employee01.jpg" },
  { id: 2, fullName: "John Johnson", title: "CMO", department: "Marketing", pic: "employee02.jpg" },
  { id: 3, fullName: "Leon Conrad", title: "CFO", department: "Business", pic: "employee03.jpg" },
  { id: 4, fullName: "Elliot Blair", title: "CTO", department: "Engineering", pic: "employee04.jpg" },
  { id: 5, fullName: "Jeanine Eifert", title: "Art Director", department: "Marketing", pic: "employee05.jpg" },
  { id: 6, fullName: "Alissa Ree", title: "Frontend Dev", department: "Engineering", pic: "employee06.jpg" }
]

ReactDOM.render(<EmployeeList listado={ employees } />, document.getElementById('application'))  