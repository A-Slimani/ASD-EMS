import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './managerPages/Dashboard';
import Login from './Login';
import Logout from './Logout';
import UserList from './managerPages/UserList';
import AddUser from './managerPages/AddUser';
import Roster from './managerPages/Roster';
import DiscussionBoard from './employeePages/discussionBoard';
import PaymentPolicy from './managerPages/PaymentPolicy';
import FileComplaint from './employeePages/FileComplaint';
import Application from './employeePages/Application';
import ApplicationList from './managerPages/ApplicationList';
import PayrollHistory from './managerPages/PayrollHistory';
import UpdateEmployee from './managerPages/UpdateEmployee';
import ComplaintList from './managerPages/ComplaintList';
import Personal from './managerPages/Personal';
import UpdatePayroll from './managerPages/UpdatePayroll';
import EmployeeDashboard from './employeePages/EmployeeDashboard';
import UpdatePolicy from './managerPages/UpdatePolicy';
import AddPayroll from './managerPages/AddPayroll';
import ConcernList from './managerPages/ConcernList'
import Profile from './managerPages/Profile'
import EmployeePersonal from './employeePages/EmployeePersonal';
import AddRoster from './managerPages/AddRoster';
import './App.less'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> <Login /> </Route>
        <Route exact path="/Logout"> <Logout /> </Route>

        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/EmployeeDashboard" component={EmployeeDashboard} /> 

        <Route exact path="/ComplaintList" component={ComplaintList} />
        <Route exact path="/FileComplaint" component={FileComplaint} />

        <Route exact path="/AddRoster" component={AddRoster} /> 
        <Route exact path="/Roster" component={Roster} />

        <Route exact path="/discussionBoard" component={DiscussionBoard} /> 
        <Route exact path="/ConcernList" component={ConcernList} /> 

        <Route exact path="/Personal" component={Personal} /> 
        <Route exact path="/EmployeePersonal" component={EmployeePersonal} />

        <Route exact path="/Profile/:id" component={Profile} />
        <Route exact path="/AddUser" component={AddUser} /> 
        <Route exact path="/UserList" component={UserList} /> 
        <Route exact path="/UpdateEmployee/:id" component={UpdateEmployee} /> 

        <Route exact path="/Application" component={Application} /> 
        <Route exact path="/ApplicationList" component={ApplicationList} />

        <Route exact path="/AddPayroll" component={AddPayroll} />
        <Route exact path="/UpdatePayroll/:id" component={UpdatePayroll} /> 
        <Route exact path="/PayrollHistory" component={PayrollHistory} /> 

        <Route exact path="/PaymentPolicy" component={PaymentPolicy} />
        <Route exact path="/UpdatePolicy" component={UpdatePolicy} /> 

        <Route path="*" component={() => "404 Not Found"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
