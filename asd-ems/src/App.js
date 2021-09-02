import Login from './Login';
import { Heading, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Heading mb={20}> Employee Management System </Heading>
      <Login />
    </Flex>
  );
}

export default App;
