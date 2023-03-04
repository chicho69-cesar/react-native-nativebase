import { useColorModeValue, useColorMode, Center, Box, Text, Button } from 'native-base';

export const UseColorModeValue = () => {
  const {
    toggleColorMode
  } = useColorMode();
  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  
  return <Center>
    <Box p="4" flex="1" bg={bg} maxW="300" w="100%" mt={10} safeArea>
      <Text fontSize="lg" display="flex" mb={20}>
        The active color mode is{" "}
        <Text bold fontSize="18px">
          {text}
        </Text>
      </Text>

      <Button onPress={toggleColorMode} h={10}>
        Toggle
      </Button>
    </Box>
  </Center>;
}