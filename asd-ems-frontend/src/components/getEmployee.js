import employeeService from '../services/Employee' 
import {useState} from 'react'

const GetEmployee = e => {
	const [employees, setEmployees] = useState([])

	console.log(e.currentTarget.id);
	const employee = employees.find(emp => emp.id === e.currentTarget.id)
}