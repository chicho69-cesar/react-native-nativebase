import { Heading, VStack, Box, Text } from 'native-base';

export function Basic() {
  return <Heading>I'm a Heading</Heading>;
}

export function Sizes() {
  return <VStack space={1} alignItems="center">
    <Heading size="xs">xs</Heading>
    <Heading size="sm">sm</Heading>
    <Heading size="md">md</Heading>
    <Heading size="lg">lg</Heading>
    <Heading size="xl">xl</Heading>
    <Heading size="2xl">2xl</Heading>
    <Heading size="3xl">3xl</Heading>
    <Heading size="4xl">4xl</Heading>
  </VStack>;
}

export function Truncated() {
  return <Heading isTruncated>
    NativeBase is a simple, modular and accessible component library that
    gives you building blocks to build you React applications.
  </Heading>;
}

export function Override() {
  return <Heading size="lg" fontSize={50} bold>
    How are you?
  </Heading>;
}

export function Composition() {
  return <Box>
    <Heading size="xl" mb="4">
      Heading
    </Heading>

    <Text fontSize="xl">
      Headings are used for rendering headlines. Heading composes Text so you
      can use all the style props.
    </Text>
  </Box>;
}