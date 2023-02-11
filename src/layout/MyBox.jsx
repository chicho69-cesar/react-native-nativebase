import { 
  Box, AspectRatio, Image, 
  Center, Stack, Heading, 
  Text, HStack, NativeBaseProvider
} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useEffect } from "react";

export function Basic() {
  return <Box>
    <Box alignSelf="center" // bg="primary.500"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        letterSpacing: "lg"
      }} 
      bg={[ "red.400", "blue.400" ]}
    >
      This is a Box
    </Box>
  </Box>;
}

export function BasicExtended() {
  return <>
    <Box 
      p="2" bg="primary.500" 
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        letterSpacing: 'lg'
      }} 
      shadow={2}
    >
      This is a Box
    </Box>
  </>;
}

export function Composition() {
  return <Box alignItems="center">
    <Box 
      maxW="80" rounded="lg" overflow="hidden" 
      borderColor="coolGray.200" borderWidth="1" 
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} 
      _web={{
        shadow: 2,
        borderWidth: 0
      }} 
      _light={{
        backgroundColor: "gray.50"
      }}
    >
      <Box>
        <AspectRatio 
          w="100%" ratio={16 / 9}
        >
          <Image 
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" 
          />
        </AspectRatio>
        
        <Center bg="violet.500" 
          _dark={{
            bg: "violet.400"
          }} 
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} 
          position="absolute" bottom="0" px="3" py="1.5"
        >
          PHOTOS
        </Center>
      </Box>

      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>

          <Text fontSize="xs" 
            _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} 
            fontWeight="500" ml="-0.5" mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>

        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>

        <HStack alignItems="center" 
          space={4} justifyContent="space-between"
        >
          <HStack alignItems="center">
            <Text color="coolGray.600" 
              _dark={{
                color: "warmGray.200"
              }} fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>;
}

//* Linear grandient Expo
const LinearGrandientExpo = () => {
  return <Box 
    bg={{
      linearGradient: {
        colors: ['lightBlue.300', 'violet.800'],
        start: [0, 0],
        end: [1, 0]
      }
    }} p="12" rounded="xl" _text={{
      fontSize: 'md',
      fontWeight: 'medium',
      color: 'warmGray.50',
      textAlign: 'center'
    }}
  >
    This is a Box with Linear Gradient
  </Box>;
}

//* Config Expo
const configExpo = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export function WithLinearGradientExpo() {
  return <NativeBaseProvider config={configExpo}>
    <Center flex={1} px="3">
      <LinearGrandientExpo/>
    </Center>
  </NativeBaseProvider>;
}

//* Linear gradient Native
const LinearGradientNative = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="lg"
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
    >
      This is a Box with Linear Gradient
    </Box>
  );
}

//* Config Native
const configNative = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export function WithLinearGradientNative() {
  return (
    <NativeBaseProvider config={configNative}>
      <Center flex={1} px="3">
        <LinearGradientNative/>
      </Center>
    </NativeBaseProvider>
  );
}

export function WithRef() {
  const myRef = useRef({});

  useEffect(() => {
    const styleObj = {
      borderWidth: 4,
      borderRadius: 4,
      borderColor: "#22D3EE"
    };
    myRef.current.setNativeProps({
      style: styleObj
    });
  }, [ myRef ]);

  return <Box width="100%" bg="primary.500" 
    p="4" shadow={2} 
    _text={{
      fontSize: "md",
      fontWeight: "bold",
      color: "white"
    }} 
    ref={myRef}
  >
    This is a Box
  </Box>;
}