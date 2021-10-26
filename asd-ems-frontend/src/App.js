import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import UserList from './UserList';
import AddUser from './AddUser';
import Roster from './Roster';
import DiscussionBoard from './discussionBoard';
import PaymentPolicy from './PaymentPolicy';
import FileComplaint from './FileComplaint';
import Application from './Application';
import ApplicationList from './ApplicationList';
import PayrollHistory from './PayrollHistory';
import UpdateEmployee from './UpdateEmployee';
import ComplaintList from './ComplaintList';
import Personal from './Personal';
import UpdatePayroll from './UpdatePayroll';
import EmployeeDashboard from './EmployeeDashboard';
import UpdatePolicy from './UpdatePolicy';
import AddPayroll from './AddPayroll';
import ConcernList from './ConcernList'
import Profile from './Profile'
import EmployeePersonal from './EmployeePersonal';
import AddRoster from './AddRoster';
// import UpdateUser from './UpdateUser';
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
