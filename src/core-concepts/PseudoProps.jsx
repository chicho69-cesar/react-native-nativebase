import { Box, Pressable, Text, useDisclose, Center, HStack, VStack } from "native-base";

export function HoverProps() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  return <Box flex={1} my="4">
    <Pressable 
      _hover={{ bg: "primary.700" }} bg="primary.600" 
      py="2" px="3" rounded="sm" alignSelf="center"
    >
      <Text 
        textTransform="uppercase" 
        fontWeight="bold" color="white"
      >
        Hover
      </Text>
    </Pressable>
  </Box>;
}

export function PressedProps() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  return <Center my="4">
    <Pressable _pressed={{ bg: "primary.800" }} bg="primary.600" 
      py="2" rounded="sm" px="3" alignSelf="center"
    >
      <Text 
        textTransform="uppercase" 
        fontWeight="bold" color="white"
      >
        Pressed
      </Text>
    </Pressable>
  </Center>;
}

export function FocusProps() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  return <Center my="4">
    <Pressable 
      _focus={{
        bg: "primary.700",
        borderColor: "primary.400",
        borderWidth: "2px"
      }} 
      bg="primary.600" rounded="sm" 
      py="2" px="3" alignSelf="center"
    >
      <Text 
        textTransform="uppercase" 
        fontWeight="bold" color="white"
      >
        Focus
      </Text>
    </Pressable>
  </Center>;
}

export function PlatformSpecificStyling() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  
  return <Center my="4">
    <HStack space={4} justifyContent="center" alignItems="center">
      <VStack alignItems="center" space="2">
        <Box 
          _web={{ bg: "cyan.600" }} rounded="sm" 
          py="2" px="3" alignSelf="center"
        >
          <Text 
            textTransform="uppercase" 
            fontWeight="bold" color="white"
          >
            Save
          </Text>
        </Box>

        <Text color="white">Web</Text>
      </VStack>

      <VStack alignItems="center" space="2">
        <Box 
          _android={{ bg: "yellow.400" }} py="2"
          rounded="sm" px="3" alignSelf="center"
        >
          <Text textTransform="uppercase" fontWeight="bold">
            Save
          </Text>
        </Box>

        <Text color="white">Android</Text>
      </VStack>

      <VStack alignItems="center" space="2">
        <Box 
          _ios={{ bg: "violet.500" }} py="2"
          rounded="sm" px="3" alignSelf="center"
        >
          <Text 
            textTransform="uppercase" 
            fontWeight="bold" color="white"
          >
            Save
          </Text>
        </Box>
        <Text color="white">iOS</Text>
      </VStack>
    </HStack>
  </Center>;
}