import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import UserList from './userList';
import AddUser from './addUser';
import DiscussionBoard from './discussionBoard';
import FileComplaint from './fileComplaint';
import Application from './application';
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
        <Route exact path="/addUser">
          <AddUser />
        </Route>
        <Route exact path="/userList">
          <UserList />
        </Route>
        <Route exact path="/discussionBoard">
          <DiscussionBoard />
        </Route>
        <Route exact path="/fileComplaint">
          <FileComplaint />
        </Route>
        <Route exact path="/application">
          <Application />
        </Route>
        <Route exact path="/UpdateEmployee">
          <UpdateEmployee />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
