import { HStack, Spinner, Heading } from 'native-base';

export function BasicSpinner() {
  return <HStack space={2} justifyContent="center">
    <Spinner accessibilityLabel="Loading posts" />
    <Heading color="primary.500" fontSize="md">
      Loading
    </Heading>
  </HStack>;
}

export function ColorsSpinner() {
  return <HStack space={8} justifyContent="center">
    <Spinner color="emerald.500" />
    <Spinner color="warning.500" />
    <Spinner color="indigo.500" />
    <Spinner color="cyan.500" />
  </HStack>;
}

export function SizesSpinner() {
  return <HStack space={8} justifyContent="center" alignItems="center">
    <Spinner size="sm" />
    <Spinner size="lg" />
  </HStack>;
}