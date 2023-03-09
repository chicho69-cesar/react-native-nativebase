import { Center, Text, Box, HStack, Image, Stack, Heading } from 'native-base';

export function ArraySintax() {
  return <Center 
    bg="emerald.400" _text={{ color: "white" }} 
    rounded="xl" w={[24, 48, 72]} h={24}
  >
    This is a box
  </Center>;
}

export function ObjectSintax() {
  return <Text 
    fontSize={{
      base: "md",
      md: "lg",
      lg: "xl"
    }}
  >
    This is responsive text
  </Text>;
}

export function DemoResponsive() {
  return <Stack 
    direction={["column", "column", "row"]} rounded="lg" 
    overflow="hidden" width={["72", "72", "4/6"]} 
    height={["96", "96", "48"]} shadow="1" 
    _light={{ backgroundColor: "coolGray.50" }} 
    _dark={{ backgroundColor: "gray.700" }}
  >
    <Box w={["100%", "100%", "40"]} h={["50%", "50%", "48"]}>
      <Image 
        w={["100%", "100%", "40"]} h="100%" 
        source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        }} 
        alt="image" 
      />

      <Center 
        bg="violet.500" 
        _text={{
          color: "white",
          fontWeight: "700",
          fontSize: "xs"
        }} 
        position="absolute" bottom="0" 
        px="3" py="1.5"
      >
        PHOTOS
      </Center>
    </Box>

    <Stack 
      flex="1" p="4" space={[3, 3, 1.5]} 
      justifyContent="space-around"
    >
      <Stack space="2">
        <Heading size="md" ml="-1">
          The Garden City
        </Heading>

        <Text fontSize="xs" color="violet.500" fontWeight="500" ml="-0.5" mt="-1">
          The Silicon Valley of India.
        </Text>
      </Stack>

      <Text fontWeight="400">
        Bengaluru (also called Bangalore) is the center of India's high-tech
        industry. The city is also known for its parks and nightlife.
      </Text>

      <HStack alignItems="center" space="4" justifyContent="space-between">
        <Text 
          color="coolGray.600" 
          _dark={{ color: "warmGray.200" }} 
          fontWeight="400"
        >
          6 mins ago
        </Text>
      </HStack>
    </Stack>
  </Stack>;
}