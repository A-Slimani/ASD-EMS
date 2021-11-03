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
import UpdateUser from './employeePages/UpdateUser';
import './App.less'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> <Login /> </Route>
        <Route exact path="/Logout"> <Logout /> </Route>

        <Route exact path="/ComplaintList"> <ComplaintList /> </Route>
        <Route exact path="/FileComplaint"> <FileComplaint /> </Route>

        <Route exact path="/Dashboard"> <Dashboard /> </Route>
        <Route exact path="/EmployeeDashboard"> <EmployeeDashboard /> </Route>
        <Route exact path="/AddRoster"> <AddRoster /> </Route>
        <Route exact path="/Roster"> <Roster /> </Route>

        <Route exact path="/discussionBoard"> <DiscussionBoard /> </Route>
        <Route exact path="/ConcernList"> <ConcernList /> </Route>

        <Route exact path="/Personal"> <Personal /> </Route>
        <Route exact path="/EmployeePersonal"> <EmployeePersonal /> </Route>

        <Route exact path="/Profile/:id"> <Profile /> </Route>
        <Route exact path="/AddUser"> <AddUser /> </Route>
        <Route exact path="/UserList"> <UserList /> </Route>
        <Route exact path="/UpdateEmployee/:id"> <UpdateEmployee /> </Route>
        {/* <Route exact path="/UpdateUser/:id"> <UpdateUser /> </Route> */}

        <Route exact path="/Application"> <Application /> </Route>
        <Route exact path="/ApplicationList"> <ApplicationList /> </Route>

        <Route exact path="/AddPayroll"> <AddPayroll /> </Route>
        <Route exact path="/UpdatePayroll/:id"> <UpdatePayroll /> </Route>
        <Route exact path="/PayrollHistory"> <PayrollHistory /> </Route>

        <Route exact path="/PaymentPolicy"> <PaymentPolicy /> </Route>
        <Route exact path="/UpdatePolicy"> <UpdatePolicy /> </Route>

        <Route path="*" component={() => "404 Not Found"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
