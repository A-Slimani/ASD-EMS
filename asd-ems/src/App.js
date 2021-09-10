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
import PayrollLog from './PayrollLog';
import UpdateEmployee from './UpdateEmployee';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Logout">
          <Logout />
        </Route>
        <Route exact path="/AddUser">
          <AddUser />
        </Route>
        <Route exact path="/UserList">
          <UserList />
        </Route>
        <Route exact path="/paymentPolicy">
          <PaymentPolicy />
        </Route>
        <Route exact path="/discussionBoard">
          <DiscussionBoard />
        </Route>
        <Route exact path="/FileComplaint">
          <FileComplaint />
        </Route>
        <Route exact path="/Application">
          <Application />
        </Route>
        <Route>
          <PayrollLog />
        </Route>
        <Route exact path="/UpdateEmployee">
          <UpdateEmployee />
        </Route>
        <Route>
          <PaymentPolicy />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
