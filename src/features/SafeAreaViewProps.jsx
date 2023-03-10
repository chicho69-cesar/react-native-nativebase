import { Box, Text, useSafeArea } from 'native-base';

export function FlexibleSafeArea() {
  return (
    <Box bg="teal.400" rounded="xl" size="24" safeArea>
      <Text>NativeBase</Text>
    </Box>
  );
}

export function FixedSafeArea() {
  return (
    <Box bg="teal.400" rounded="xl" size="24" safeAreaTop="8">
      <Text>NativeBase</Text>
    </Box>
  );
}

export function UsingHookSafeArea() {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2
  });

  return (
    <Box bg="teal.400" rounded="xl" size="24" {...safeAreaProps}>
      <Text>NativeBase</Text>
    </Box>
  );
}