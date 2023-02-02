import { Stack, HStack, Center } from "native-base";

export function HStackExample() {
  return <Stack space={3} alignItems="center">
    <HStack space={3} alignItems="center">
      <Center h="40" w="20" bg="primary.200" rounded="md" shadow={3} />
      <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
      <Center h="40" w="20" 
        _dark={{
          bg: 'primary.500'
        }} 
        _light={{
          bg: 'primary.400'
        }} 
        rounded="md" shadow={3} 
      />
    </HStack>
  </Stack>;
}

export function BasicHStack() {
  return <HStack space={3} justifyContent="center">
    <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
    <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
  </HStack>;
}