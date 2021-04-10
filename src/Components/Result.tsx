import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useWpm } from '../hooks/useWpm';
import { useTyping } from '../state/context';
import { countCorrectCharacters, countCorrectWords } from '../utils';

export default function Result() {
  const {
    state: { seconds, input, text, limit },
    onReset,
  } = useTyping();
  const wpm = useWpm();

  const x = countCorrectWords(text, input);
  console.log(text.split(' ').length);

  return seconds === limit ? (
    <Flex
      direction="column"
      mx="auto"
      borderRadius="lg"
      shadow="sm"
      borderColor="gray.50"
      backgroundColor="white"
      borderWidth="thin"
      w={['100%', '90%', '90%', '85%', '75%']}
      px={[0, 1, 2, 8]}
      py="8"
      my="8"
    >
      <Flex justifyContent="space-between">
        <Heading color="green.400">Results</Heading>
        <Button onClick={onReset}>Restart Test</Button>
      </Flex>
      <Flex
        my="8"
        textAlign="center"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Count total={limit} remaining={limit} text={'seconds'} />

        <Count total={70} remaining={wpm.current} text="WPM" />

        <Count
          total={text.replace(' ', '').length}
          remaining={countCorrectCharacters(text, input)}
          text={'characters'}
        />

        <Count
          total={text.split(' ').length * 10}
          remaining={x < 0 ? 0 : x}
          text="Points"
        />
      </Flex>
    </Flex>
  ) : null;
}

function Count({
  total,
  remaining,
  text,
}: {
  text: string;
  total: number;
  remaining: number;
}) {
  return (
    <Flex justifyContent="center" flex="0.5">
      <CountdownCircleTimer
        isPlaying={false}
        duration={total}
        initialRemainingTime={remaining}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
      >
        {({ remainingTime }) => (
          <Box mx="auto" textAlign="center">
            <Heading>{remainingTime} </Heading>
            <Text color="gray.500" fontSize="medium">
              {text}
            </Text>
          </Box>
        )}
      </CountdownCircleTimer>
    </Flex>
  );
}
