import { countCorrectCharacters } from '../../utils';
import { useTyping } from '../../state/context';
import { Button } from '@chakra-ui/button';
import './Stats.css';
import { Box, Flex } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { useWpm } from '../../hooks/useWpm';

export const SpeedInfo = () => {
  const {
    state: { seconds, input, text, limit },
    onReset,
  } = useTyping();

  const wpm = useWpm();

  console.log(wpm);

  return limit !== seconds ? (
    <Flex
      px="8"
      py="4"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
      color="gray.400"
    >
      <Flex flexDir="column" justifyContent="space-around" alignItems="center">
        <CircleIcon />
        <Box mt="2"> {limit - seconds}</Box>
      </Flex>
      <Flex flexDir="column" justifyContent="space-around" alignItems="center">
        <div>WPM</div>
        <div> {wpm.current}</div>
      </Flex>
      <Flex flexDir="column" justifyContent="space-around" alignItems="center">
        <div>Correct Characters</div>
        <div> {countCorrectCharacters(text, input)}</div>
      </Flex>
      <Button onClick={onReset}>Restart</Button>
    </Flex>
  ) : null;
};

const CircleIcon = () => (
  <Icon viewBox="0 0 24 24">
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  </Icon>
);
