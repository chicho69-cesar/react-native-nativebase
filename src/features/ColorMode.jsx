import { useColorMode, Text, Button, Center, Box, useColorModeValue } from "native-base";

export function CMUseColorMode() {
  const {
    toggleColorMode
  } = useColorMode();

  const text = useColorModeValue("Light", "Dark");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");

  return <Center>
    <Box 
      p="4" flex="1" bg={bg} maxW="300" 
      w="100%" mt={10} safeArea
    >
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

export function LightAndDarkPseudoProps() {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  return <Center flex={1}>
    <Box 
      p={4} maxW="300" 
      _dark={{ bg: "coolGray.800" }} 
      _light={{ bg: "warmGray.50" }}
    >
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{' '}
        <Text bold fontSize="lg">
          {colorMode}
        </Text>
      </Text>
      
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Box>
  </Center>;
}