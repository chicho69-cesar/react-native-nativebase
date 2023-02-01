import { Center, Square, Circle, HStack, Icon, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export function Basic() {
  return <Center>
    <Center bg="primary.400" 
      _text={{
        color: "white",
        fontWeight: "bold"
      }} height={200} width={{
        base: 200,
        lg: 250
      }}
    >
      This is the Center
    </Center>
  </Center>;
}

export function IconFrames() {
  return <HStack space={1}>
    <Center w="40px" h="40px" bg="primary.400">
      <Icon as={<MaterialIcons name="audiotrack" />} color="white" size={6} />
    </Center>

    <Center w="40px" h="40px" bg="secondary.400">
      <Box _text={{
        fontWeight: "bold",
        fontSize: "lg",
        color: "white"
      }}>
        20
      </Box>
    </Center>
  </HStack>;
}

export function SquareAndCircle() {
  return <HStack space={3}>
    <Circle size="40px" bg="secondary.400">
      <Icon as={<MaterialIcons name="audiotrack" />} color="white" size={5} />
    </Circle>
    
    <Square size="40px" bg="primary.400">
      <Box _text={{
        fontWeight: "bold",
        fontSize: "lg",
        color: "white"
      }}>
        20
      </Box>
    </Square>
  </HStack>;
}