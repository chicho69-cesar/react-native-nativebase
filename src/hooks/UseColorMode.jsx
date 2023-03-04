import { useColorMode, Center, Box, Text, Button } from "native-base";

export const UseColorMode = () => {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  return <Center>
    <Box 
      p="4" flex="1" maxW="300" 
      mt={10} w="100%" safeArea
      bg={
        colorMode === "dark" 
          ? "coolGray.800" 
          : "warmGray.50"
      }
    >
      <Text fontSize="lg" display="flex" mb="20">
        The active color mode is{" "}
        <Text bold fontSize="lg">
          {colorMode}
        </Text>
      </Text>

      <Button onPress={toggleColorMode} h={10}>
        Toggle
      </Button>
    </Box>
  </Center>;
}