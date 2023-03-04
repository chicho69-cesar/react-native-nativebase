import { useToken, VStack, HStack, Box, Text } from 'native-base';

export const UseToken = () => {
  const [ colorPick1, colorPick2 ] = useToken( // the key within the theme, in this case `theme.colors`
    'colors', // the subkey(s), resolving to `theme.colors.warning.1`
    [ 'yellow.500', 'cyan.500' ] // a single fallback or fallback array matching the length of the previous arg
  );

  return <VStack space={5}>
    <HStack space={2} alignItems="center">
      <Box bg={colorPick1} p="3"></Box>
      <Text>{colorPick1}</Text>
    </HStack>

    <HStack space={2} alignItems="center">
      <Box bg={colorPick2} p="3"></Box>
      <Text>{colorPick2}</Text>
    </HStack>
  </VStack>;
}