import { Box, Text, Stack, HStack, Center, Button, Flex } from 'native-base';

const NBBox1 = props => {
  return <Box borderRadius="md" bg="primary.600" {...props} />;
}

export function MarginAndPadding() {
  return <>
    <NBBox1 m="2" p="5" />
    <NBBox1 mx="auto" px="20" py="5" />
    <NBBox1 m={[2, 3]} pt="10" pr="10" />
  </>;
}

const NBBox2 = props => {
  return <Box p="5" m="2" borderRadius="md" bg="primary.200" {...props} />;
}

export function ColorAndBackground() {
  return <>
    <NBBox2 bg="#10b981" />

    <NBBox2 bgColor="cyan.100" py="3">
      <Text color="cyan.500" fontWeight="bold">
        {" "}
        I love NativeBase
      </Text>
    </NBBox2>

    <NBBox2 backgroundColor="#eab308" />
  </>;
}

export function UPTypography() {
  return <Stack space="2" alignItems="center">
    <HStack space="2" alignItems="center">
      <Center 
        size="16" bg="primary.400:alpha.30" 
        rounded="md" _text={{ color: "white" }}
      >
        Box 1
      </Center>

      <Center 
        size="16" bg="primary.400:alpha.70" 
        rounded="md" _text={{ color: "white" }}
      >
        Box 2
      </Center>

      <Center 
        bg="primary.400" size="16" shadow="1"
        rounded="md" _text={{ color: "white" }}
      >
        Box 3
      </Center>
    </HStack>
  </Stack>;
}

const NBText = props => {
  return <Text m="2" {...props} />;
}

export function UPText() {
  return <>
    <NBText fontSize="2xl" fontWeight="bold">
      Thank You{" "}
    </NBText>
    
    <NBText textDecoration="underline">Merci Beaucoup</NBText>
    
    <NBText fontWeight="bold">Danke sehr </NBText>
    
    <NBText letterSpacing="2xl">Arigatou </NBText>
  </>;
}

const NBBox3 = props => {
  return <Box m="2" borderRadius="md" bg="primary.600" {...props} />;
}

export function LayoutWidthAndHeight() {
  return <>
    <NBBox3 width="100%" height="8" />
    <NBBox3 w="100%" h="32px" />
    <NBBox3 boxSize="12" />
    <NBBox3 w="50%" h="8" />
    <NBBox3 w="256" />
    <NBBox3 w="40px" h="8" />
  </>;
}

const NBBox4 = props => {
  return <Box p="5" m="2" borderRadius="md" bg="primary.600" {...props} />;
}

export function UPFlexbox() {
  return <>
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <NBBox4 />
      <NBBox4 />
      <NBBox4 />
    </Box>
    
    <Flex align="center" justify="center">
      <NBBox4 />
      <NBBox4 />
    </Flex>
  </>;
}

const NBBox5 = props => {
  return <Box p="5" m="2" borderRadius="md" bg="primary.200" {...props} />;
}

export function UPBorders() {
  return <>
    <NBBox5 borderWidth="1" borderColor="cyan.500" />
    <NBBox5 borderWidth="2" borderColor="cyan.500" />
    <NBBox5 borderColor="cyan.500" borderTopWidth="7" />
  </>;
}

const NBBox6 = props => {
  return <Box p="5" m="2" bg="primary.500" {...props} />;
}

export function UPBordersRadius() {
  return <>
    <NBBox6 borderRadius="md" />
    <NBBox6 borderRadius="full" />
    
    <NBBox6 borderLeftRadius="10" />
    
    <NBBox6 borderRadius="8" />
  </>;
}

const NBBox7 = props => {
  return <Box p="5" borderRadius="md" bg="primary.400" {...props} />;
}

export function UPPosition() {
  return <Box justifyContent="center" alignItems="center" flexDirection="row">
    <NBBox7 position="relative" p="7" />
    <NBBox7 bg="yellow.400" zIndex={2} position="absolute" />
    <NBBox7 bg="emerald.400" position="relative" p="7" />
  </Box>;
}

const NBBox8 = props => {
  return <Box p="5" m="2" borderRadius="md" bg="primary.500" {...props} />;
}

export function UPShadow() {
  return <>
    <NBBox8 shadow="1" />
    <NBBox8 shadow="3" />
    <NBBox8 shadow="5" />
    <NBBox8 shadow="7" />
    <NBBox8 shadow="9" />
  </>;
}

export function InternalProps() {
  return <Button _text={{
    color: "primary.100",
    fontSize: "md",
    fontWeight: "bold",
    underline: true
  }}>
    Save
  </Button>;
}

export function InteractionProps() {
  return <Button colorScheme="yellow" _pressed={{
    bg: "yellow.600",
    _text: {
      color: "warmGray.50"
    }
  }}>
    Save
  </Button>;
}