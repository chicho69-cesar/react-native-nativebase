import { 
  Flex, 
  Center, 
  Heading, 
  ScrollView, 
  VStack, 
  Divider, 
  Box, 
  Spacer,
  useColorModeValue 
} from "native-base";

function BoxElement({direction}) {
  const bgShade100 = useColorModeValue("primary.100", "primary.400");
  const bgShade200 = useColorModeValue("primary.200", "primary.500");
  const bgShade300 = useColorModeValue("primary.300", "primary.600");
  const bgShade400 = useColorModeValue("primary.400", "primary.700");

  return <Flex direction={direction} mb="2.5" mt="1.5" _text={{
    color: "coolGray.800"
  }}>
    <Center size="16" bg={bgShade100}>
      100
    </Center>
    <Center size="16" bg={bgShade200}>
      200
    </Center>
    <Center size="16" bg={bgShade300}>
      300
    </Center>
    <Center size="16" bg={bgShade400}>
      400
    </Center>
  </Flex>;
}

export function FlexExample() {
  return <Box flex="1" safeAreaTop>
    <ScrollView _contentContainerStyle={{
      h: "full",
      px: "20px",
      mb: "4",
      minW: "72"
    }}>
      <VStack space={2.5} w="100%" px="3">
        { /* flexDirection -> row */ }
        <Heading size="md">row</Heading>
        <BoxElement direction="row"/>
        <Divider />

        { /* flexDirection -> column */ }
        <Heading size="md">column</Heading>
        <BoxElement direction="column"/>
        <Divider />

        { /* flexDirection -> row-reverse */ }
        <Heading size="md">row-reverse</Heading>
        <BoxElement direction="row-reverse"/>
        <Divider />
        
        { /* flexDirection -> column-reverse */ }
        <Heading size="md">column-reverse</Heading>
        <BoxElement direction="column-reverse"/>
        <Divider />
      </VStack>
    </ScrollView>
  </Box>;
}

export function WithSpacer() {
  return <Flex h={40} alignItems="center">
    <Center size={16} bg="primary.500" 
      _dark={{
        bg: "primary.400"
      }} 
      rounded="sm" 
      _text={{
        color: "warmGray.50",
        fontWeight: "medium"
      }}
    >
      Box 1
    </Center>

    <Spacer />

    <Center size={16} bg="secondary.500" 
      _dark={{
        bg: "secondary.400"
      }} 
      rounded="sm" 
      _text={{
        color: "warmGray.50",
        fontWeight: "medium"
      }}
    >
      Box 2
    </Center>
  </Flex>;
}