import { VStack, Center } from "native-base";

export function VStackExample() {
  return <VStack space={4} alignItems="center">
    <Center w="64" h="10" bg="indigo.200" rounded="md" shadow={3} />
    <Center w="64" h="10" bg="indigo.300" rounded="md" shadow={3} />
    <Center w="64" h="10" 
      _dark={{
        bg: 'indigo.500'
      }} 
      _light={{
        bg: 'indigo.400'
      }} 
      rounded="md" shadow={3} 
    />
  </VStack>;
}

export function BasicVStack() {
  return <VStack space={4} alignItems="center">
    <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
    <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
    <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
  </VStack>;
}