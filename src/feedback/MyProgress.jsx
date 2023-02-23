import { Center, Box, Progress, VStack } from 'native-base';

export function BasicProgress() {
  return <Center w="100%">
    <Box w="90%" maxW="400">
      <Progress value={45} mx="4" />
    </Box>
  </Center>;
}

export function ProgressColorSchema() {
  return <Center w="100%">
    <Box w="90%" maxW="400">
      <VStack space="md">
        <VStack mx="4" space="md">
          <Progress colorScheme="primary" value={35} />
          <Progress colorScheme="secondary" value={45} />
          <Progress colorScheme="emerald" value={55} />
          <Progress colorScheme="warning" value={65} />
          <Progress colorScheme="light" value={75} />
        </VStack>
      </VStack>
    </Box>
  </Center>;
}

export function SizesProgress() {
  return <Center w="100%">
    <Box w="90%" maxW="400">
      <VStack space="md">
        <VStack mx="4" space="md">
          <Progress size="xs" mb={4} value={25} />
          <Progress size="sm" mb={4} value={35} />
          <Progress size="md" mb={4} value={45} />
          <Progress size="lg" mb={4} value={55} />
          <Progress size="xl" mb={4} value={65} />
          <Progress size="2xl" mb={4} value={75} />
        </VStack>
      </VStack>
    </Box>
  </Center>;
}

export function FlatProgress() {
  return <Center w="100%">
    <Box w="90%" maxW="400">
      <Progress rounded="0" value={65} mx="4" />
    </Box>
  </Center>;
}

export function CustomTrackColor() {
  return <Center w="100%">
    <Box w="90%" maxW="400">
      <Progress 
        bg="coolGray.100" 
        _filledTrack={{ bg: "lime.500" }} 
        value={75} mx="4" 
      />
    </Box>
  </Center>;
}