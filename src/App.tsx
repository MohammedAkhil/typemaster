import './App.css';
import { Box, Heading } from '@chakra-ui/layout';
import { Preview } from './Components/Preview';
import { SpeedInfo } from './Components/Stats';
import { useEffect, useRef } from 'react';
import Input from './Components/Input';
import Result from './Components/Result';
import Hint from './Components/Hint';

function App() {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Box height="100vh" p={4}>
      <Heading mx="8" mb="24">
        Type master
      </Heading>
      <Hint />
      <Box
        pos="relative"
        mx="auto"
        borderRadius="lg"
        shadow="sm"
        borderColor="gray.50"
        backgroundColor="white"
        borderWidth="thin"
        w={['100%', '90%', '90%', '85%', '75%']}
        px={[0, 1, 2, 8]}
        py="0"
      >
        <Input inputRef={inputRef} />
        <Preview />
        <SpeedInfo />
      </Box>
      <Result />
    </Box>
  );
}

export default App;
