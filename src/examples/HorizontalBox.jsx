import { 
  AspectRatio, 
  Box,
  HStack,
  Image, 
  Text,
  Heading,
  Flex,
  Stack,
  Row
} from "native-base";

export default HorizontalBox = () => {
  return <Box alignItems='center'>
    <Flex direction="row"
      maxW="80" rounded="lg" overflow="hidden" 
      borderColor="coolGray.200" borderWidth="1"
    >
      <SectionImage/>
      <SectionText/>
    </Flex>
  </Box>;
}

function SectionImage() {
  return <Box w="40%">
    <AspectRatio 
      ratio={9 / 16}
    >
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1542776478475190272/5h39TXBP_400x400.jpg"
        }}
        alt="FC Barcelona"
      />
    </AspectRatio>
    
    <Row 
      position="absolute" bottom="2" w='100%'
      flex={1} justifyContent='center' alignItems='center'
    >
      <Text
        bg='violet.500' px='3' py="1.5"
        _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }}
      >
        Barca
      </Text>
    </Row>
  </Box>;
}

function SectionText() {
  return <Stack w='60%' p='2'>
    <Stack>
      <Heading size="md" ml="-1" color='red.600'>
        Futbol Club Barcelona
      </Heading>

      <Text 
        fontSize="xs" color="violet.500"
        fontWeight="500" ml="-0.5" mt="-1"
      >
        Mes que un Club.
      </Text>
    </Stack>

    <Text fontWeight="400" color='black' mt='2'>
      El futbol club Barcelona es el equipo mas grande del futbol español 
      junto con el Real Madrid. 
    </Text>

    <HStack alignItems="center" mt='5'>
      <Text 
        color="coolGray.400" fontWeight="400"
      >
        10 mins antes
      </Text>
    </HStack>
  </Stack>;
}