import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
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
import UpdateUser from './UpdateUser'
import './App.less'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Login /> </Route>
        <Route exact path="/Logout"> <Logout /> </Route>

        <Route exact path="/ComplaintList/:id"> <ComplaintList /> </Route>
        <Route exact path="/FileComplaint/:id"> <FileComplaint /> </Route>

        <Route exact path="/Dashboard/:id"> <Dashboard /> </Route>
        <Route exact path="/EmployeeDashboard/:id"> <EmployeeDashboard /> </Route>
        <Route exact path="/Roster/:id"> <Roster /> </Route>

        <Route exact path="/discussionBoard/:id"> <DiscussionBoard /> </Route>
        <Route exact path="/ConcernList/:id"> <ConcernList /> </Route>

        <Route exact path="/Personal/:id"> <Personal /> </Route>
        <Route exact path="/EmployeePersonal/:id"> <EmployeePersonal /> </Route>

        <Route exact path="/Profile/:id"> <Profile /> </Route>
        <Route exact path="/AddUser/:id"> <AddUser /> </Route>
        <Route exact path="/UserList/:id"> <UserList /> </Route>

        <Route exact path="/UpdateEmployee/:id"> <UpdateEmployee /> </Route>
        <Route exact path="/UpdateUser/:id"> <UpdateUser /> </Route> 

        <Route exact path="/Application/:id"> <Application /> </Route>
        <Route exact path="/ApplicationList/:id"> <ApplicationList /> </Route>

        <Route exact path="/AddPayroll/:id"> <AddPayroll /> </Route>
        <Route exact path="/UpdatePayroll/:id"> <UpdatePayroll /> </Route>
        <Route exact path="/PayrollHistory/:id"> <PayrollHistory /> </Route>

        <Route exact path="/PaymentPolicy/:id"> <PaymentPolicy /> </Route>
        <Route exact path="/UpdatePolicy/:id"> <UpdatePolicy /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
