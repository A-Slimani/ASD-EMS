import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import UserList from './UserList';
import AddUser from './AddUser';
import DiscussionBoard from './discussionBoard';
import PaymentPolicy from './PaymentPolicy';
import FileComplaint from './FileComplaint';
import Application from './Application';
import ApplicationList from './ApplicationList';
import PayrollHistory from './PayrollHistory';
import UpdateEmployee from './UpdateEmployee';
import ComplaintList from './ComplaintList';
import Personal from './Personal';
import EmployeeDashboard from './EmployeeDashboard';
import UpdatePolicy from './UpdatePolicy';
import AddPayroll from './AddPayroll';
import ConcernList from './ConcernList'
import Profile from './Profile'
import EmployeePersonal from './EmployeePersonal';
import UpdatePayroll from './UpdatePayroll';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Login /> </Route>
        <Route exact path="/Logout"> <Logout /> </Route>

        <Route exact path="/ComplaintList"> <ComplaintList /> </Route>
        <Route exact path="/FileComplaint"> <FileComplaint /> </Route>

        <Route exact path="/Dashboard"> <Dashboard /> </Route>
        <Route exact path="/EmployeeDashboard"> <EmployeeDashboard /> </Route>

        <Route exact path="/discussionBoard"> <DiscussionBoard /> </Route>
        <Route exact path="/ConcernList"> <ConcernList /> </Route>

        <Route exact path="/Personal"> <Personal /> </Route>
        <Route exact path="/EmployeePersonal"> <EmployeePersonal /> </Route>

        <Route exact path="/Profile"> <Profile /> </Route>
        <Route exact path="/AddUser"> <AddUser /> </Route>
        <Route exact path="/UserList"> <UserList /> </Route>
        <Route exact path="/UpdateEmployee"> <UpdateEmployee /> </Route>

        <Route exact path="/Application"> <Application /> </Route>
        <Route exact path="/ApplicationList"> <ApplicationList /> </Route>

        <Route exact path="/AddPayroll"> <AddPayroll /> </Route>
        <Route exact path="/PayrollHistory"> <PayrollHistory /> </Route>
        <Route exact path="/UpdatePayroll"> <UpdatePayroll /> </Route>

        <Route exact path="/PaymentPolicy"> <PaymentPolicy /> </Route>
        <Route exact path="/UpdatePolicy"> <UpdatePolicy /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
