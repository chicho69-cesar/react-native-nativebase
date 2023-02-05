import { Box, ZStack, Center } from 'native-base';

export function ZStackExample() {
  return <Box mt="-20">
    <ZStack mt="3" ml={-50}>
      <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
      <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
      <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
    </ZStack>
  </Box>;
}

export function BasicZStack() {
  return <Center h="40">
    <Box mt="-32">
      <ZStack mt="3" ml={-50}>
        <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
        <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
        <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
      </ZStack>
    </Box>
  </Center>;
}

export function CenterZStack() {
  return <Center h="96">
    <ZStack alignItems="center" justifyContent="center">
      <Box bg="indigo.700" size="64" rounded="lg" />
      <Box bg="indigo.500" size="48" rounded="lg" shadow={8} />
      <Box bg="indigo.300" size="32" rounded="lg" shadow={8} />
    </ZStack>
  </Center>;
}