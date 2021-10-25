import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { ProtectedRoute } from './components/protectedRoute';

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
import ConcernList from './ConcernList';
import Profile from './Profile';
import EmployeePersonal from './EmployeePersonal';
import UpdateUser from './UpdateUser';
import './App.less';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/ComplaintList" component={ComplaintList} />
        <Route exact path="/FileComplaint" component={FileComplaint} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/EmployeeDashboard/:id">
          <EmployeeDashboard />
        </Route>
        <Route exact path="/Roster">
          <Roster />
        </Route>
        <Route exact path="/discussionBoard/:id">
          <DiscussionBoard />
        </Route>
        <Route exact path="/ConcernList">
          <ConcernList />
        </Route>
        <Route exact path="/Personal">
          {' '}
          <Personal />{' '}
        </Route>
        <Route exact path="/EmployeePersonal/:id">
          {' '}
          <EmployeePersonal />{' '}
        </Route>

        <Route exact path="/Profile">
          {' '}
          <Profile />{' '}
        </Route>
        <Route exact path="/AddUser" component={AddUser} />
        <Route exact path="/UserList">
          {' '}
          <UserList />{' '}
        </Route>

        <Route exact path="/UpdateEmployee/:id">
          <UpdateEmployee />{' '}
        </Route>
        <Route exact path="/UpdateUser/:id">
          <UpdateUser />{' '}
        </Route>

        <Route exact path="/Application/:id">
          {' '}
          <Application />{' '}
        </Route>
        <Route exact path="/ApplicationList">
          {' '}
          <ApplicationList />{' '}
        </Route>

        <Route exact path="/AddPayroll">
          {' '}
          <AddPayroll />{' '}
        </Route>
        <Route exact path="/UpdatePayroll/:id">
          {' '}
          <UpdatePayroll />{' '}
        </Route>
        <Route exact path="/PayrollHistory">
          {' '}
          <PayrollHistory />{' '}
        </Route>

        <Route exact path="/PaymentPolicy">
          {' '}
          <PaymentPolicy />{' '}
        </Route>
        <Route exact path="/UpdatePolicy">
          {' '}
          <UpdatePolicy />{' '}
        </Route>
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
