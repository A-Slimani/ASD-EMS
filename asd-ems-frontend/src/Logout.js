import { Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Logout () {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Heading mb={20}> Employee Management System </Heading>
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}> You have logged out of EMS </Heading>

        <Flex direction="row">
          <Link to="/"> <Button colorScheme="teal">
            Log in
          </Button> </Link>
          <Spacer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Logout;
