import { Button, Flex, Heading, Input, FormControl, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    function isAdmin(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR]{2}$/.test(name); }
    function isEmployee(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[OP,MK,FN]{2}$/.test(name); }

    // this is a login validate to redirect to 2 different dashboard
    // before this validate will have to verify username and password with the database
    // the username format is ...@EMSHR, ...@EMSFN, ...@EMSMK, or ...@EMSOP
    // the last 2 initial refers to departments - HR is admin while the other 3 are employee

    // if username end with HR - view admin dashboard and navbar
    // if username end with OP, MK or FN - view employee dashboard and navbar
    // if username end is not HR, OP, MK, or FN - user unable to login
    // if username/password entered not match data in database - user unable to login - this is after connect the page to database
    
    // try example@EMSHR and example@EMSOP to see the difference

    if (isAdmin(username) === true) {
      history.push('./Dashboard');
    }
    else if (isEmployee(username) === true) {
      history.push('./EmployeeDashboard');
    }
    else {
      alert('Incorrect username and/or password');
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Heading mb={20}> Employee Management System </Heading>
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <FormControl onSubmit={handleSubmit} id="loginform" name="loginform" >
          <Input
            placeholder="Username"
            name="username"
            id = "username"
            variant="filled"
            onChange={e => setUsername(e.target.value)}
            mb={3}
          />
          <Input
            placeholder="Password"
            variant="filled"
            onChange={e => setPassword(e.target.value)}
            type="password"
            mb={6}
          />
        </FormControl>
        <Flex direction="row">
          <Button colorScheme="teal" disabled={!validateForm()} onClick={handleSubmit}>
            Log in
          </Button>
          <Spacer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
