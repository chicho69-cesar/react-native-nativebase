import { HStack, VStack, Text, Switch } from "native-base";

export function BasicSwitch() {
  return <HStack alignItems="center" space={4}>
    <Text>Bluetooth</Text>
    <Switch size="sm" />
  </HStack>;
}

export function SizesSwitch() {
  return <VStack space={4} alignItems="center">
    <Switch size="sm" />
    <Switch size="md" />
    <Switch size="lg" />
  </VStack>;
}

export function SwitchThumbAndThumbColor() {
  return <VStack space={4} alignItems="center">
    <Switch />
    <Switch 
      offTrackColor="orange.100" onTrackColor="orange.200" 
      onThumbColor="orange.500" offThumbColor="orange.50" 
    />
    <Switch 
      offTrackColor="indigo.100" onTrackColor="indigo.200" 
      onThumbColor="indigo.500" offThumbColor="indigo.50" 
    />
  </VStack>;
}

export function SwitchColorSchemas() {
  return <VStack space={4} alignItems="center">
    <Switch defaultIsChecked colorScheme="primary" />
    <Switch defaultIsChecked colorScheme="secondary" />
    <Switch defaultIsChecked colorScheme="emerald" />
  </VStack>;
}