import { 
  Pressable, 
  Text, 
  Box, 
  HStack, 
  AspectRatio, 
  Flex, 
  Image, 
  Heading,
  Container
} from "native-base";

export default CustomCard = () => {
  return <Box alignItems="center" w='100%'>
    <Pressable 
      onPress={() => console.log("I'm Pressed")} 
      rounded="8" overflow="hidden" 
      borderWidth="1" borderColor="coolGray.300" 
      maxW="100%" shadow="3" bg="coolGray.100" p="5"
    >
      <Box>
        <HStack alignItems="center">
          <AspectRatio 
            ratio={{
              base: 3 / 4,
              md: 9 / 10
            }} 
            height={{
              base: 200,
              md: 400
            }}
          >
            <Image resizeMode="cover" 
              source={{
                uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              }} 
              alt="Picture of a Flower" 
            />
          </AspectRatio>

          <Container p='3' overflow='hidden'>
            <Heading color='black'>
              A component library for the
              <Text color="emerald.500"> React Ecosystem</Text>
            </Heading>

            <Text mt="3" fontWeight="medium" color='black'>
              NativeBase is a simple, modular and accessible component library that
              gives you building blocks to build you React applications.
            </Text>
          </Container>
        </HStack>

        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
          Marketing License
        </Text>

        <Text mt="2" fontSize="sm" color="coolGray.700">
          Unlock powerfull time-saving tools for creating email delivery and
          collecting marketing data
        </Text>

        <Flex>
          <Text 
            mt="2" fontSize={12} 
            fontWeight="medium" 
            color="darkBlue.600"
          >
            Read More
          </Text>
        </Flex>
      </Box>
    </Pressable>
  </Box>;
}