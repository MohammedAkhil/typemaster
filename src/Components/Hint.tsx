import { Flex, Text } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { useGlobal } from '../state';

export default function Hint() {
  const [{ seconds, limit, timerId }, { setLimit }] = useGlobal();

  return (
    <Flex
      display={timerId === undefined && seconds === 0 ? 'flex' : 'none'}
      justifyContent="space-between"
      mx="auto"
      w={['100%', '90%', '90%', '85%', '75%']}
      my="4"
    >
      <Text fontSize="xl" color="gray.400">
        Type to begin test.
      </Text>
      <RadioGroup value={limit} onChange={(val) => setLimit(Number(val))}>
        <Radio mr="8" value={60}>
          60 seconds
        </Radio>
        <Radio value={120}>120 seconds</Radio>
      </RadioGroup>
    </Flex>
  );
}
