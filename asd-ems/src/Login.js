import { Button, Flex, Heading, Input, FormControl, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Flex direction="column" background="gray.100" p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <FormControl onSubmit={handleSubmit}>
        <Input
          placeholder="username"
          variant="filled"
          onChange={e => setUsername(e.target.value)}
          mb={3}
        />
        <Input
          placeholder="password"
          variant="filled"
          onChange={e => setPassword(e.target.value)}
          type="password"
          mb={6}
        />
      </FormControl>
      <Flex direction="row">
        <Button colorScheme="teal" disabled={!validateForm()}>
          Log in
        </Button>
        <Spacer />
        <Button colorScheme="teal" disabled={true}>
          Create an Account
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
