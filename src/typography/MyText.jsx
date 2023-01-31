import { VStack, Text } from "native-base";

export function ChangingFontSize() {
  return (
    <VStack space={1} alignItems="center">
      <Text fontSize="xs">xs</Text>
      <Text fontSize="sm">sm</Text>
      <Text fontSize="md">md</Text>
      <Text fontSize="lg">lg</Text>
      <Text fontSize="xl">xl</Text>
      <Text fontSize="2xl">2xl</Text>
      <Text fontSize="3xl">3xl</Text>
      <Text fontSize="4xl">4xl</Text>
      <Text fontSize="5xl">5xl</Text>
      <Text fontSize="6xl">6xl</Text>
    </VStack>
  );
};

export function Truncated() {
  return <Text isTruncated maxW="300" w="80%">
    NativeBase gives you a contrasting color based on your theme. You can also
    customise it using the useAccessibleColors hook.
  </Text>;
};

export function Nested() {
  return <Text italic>
    <Text bold>Taj Mahal</Text> is in Agra.
  </Text>;
};

export function Overriden() {
  return <VStack space={2} alignItems="center">
    <Text bold>Bold</Text>
    <Text italic>Italic</Text>
    <Text underline>Underline</Text>

    <Text 
      highlight _dark={{
        color: "coolgray.800"
      }}
    >
      Highlighted
    </Text>

    <Text>
      H<Text sub>2</Text>O
    </Text>

    <Text underline>Underline</Text>
    <Text strikeThrough>StrikeThrough</Text>
    
    <Text bold italic underline>
      Bold, Italic & Underline
    </Text>
  </VStack>;
}