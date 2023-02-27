import { Hidden, Box, Center, Text, Button, Image, useColorMode } from "native-base";

export function BasicHidden() {
  return <Hidden>
    <Box bg="red.400" p="2">
      <Text>This text will be always hidden.</Text>
    </Box>
  </Hidden>;
}

export function HiddenBreakpoints() {
  return <>
    <Hidden from="md" till="lg">
      <Box bg="red.400" p="2">
        <Text>This text will be hidden from sm to lg screens.</Text>
      </Box>
    </Hidden>

    <Hidden only={['sm', 'lg']}>
      <Box bg="red.400" p="2">
        <Text>This text will be hidden on sm and lg screens only.</Text>
      </Box>
    </Hidden>
  </>;
}

export function HiddenColorMode() {
  const {
    toggleColorMode
  } = useColorMode();

  return <Center>
    <Button 
      colorScheme="coolGray" 
      _light={{
        _text: {
          color: "white"
        }
      }} 
      onPress={() => {
        toggleColorMode();
      }}
    >
      Change mode
    </Button>

    <Hidden colorMode="dark">
      <Center mt="5">
        <Image 
          w="150" h="150" 
          source={{
            uri: "https://images.unsplash.com/photo-1561566482-5fa7e82d88b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          }} alt="image" 
        />
      </Center>
    </Hidden>

    <Hidden colorMode="light">
      <Center mt="5">
        <Image 
          w="150" h="150" 
          source={{
            uri: "https://images.unsplash.com/photo-1590083948603-b270aff24cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          }} alt="image" 
        />
      </Center>
    </Hidden>
  </Center>;
}

export function HiddenPlatform() {
  return <Hidden platform={['ios', 'web']}>
    <Box bg="red.400" p="2">
      <Text>This text will be hidden on android and web.</Text>
    </Box>
  </Hidden>;
}