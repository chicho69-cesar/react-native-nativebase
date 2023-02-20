import { Box, Link, Text, Flex, HStack, Spacer, Badge } from "native-base";
import { useState } from "react";

export function LinkExample() {
  return <Box alignItems="center">
    <Link href="https://nativebase.io">
      Click here to open documentation.
    </Link>
  </Box>;
}

export function ExternalLink() {
  return <Box alignItems="center">
    <Text mx="16">
      NativeBase is a component library that enables devs to build universal
      design systems. It is built on top of React Native, allowing you to
      develop apps for Android, iOS and the Web.{" "}
      <Link 
        href="https://nativebase.io" isExternal 
        _text={{ color: "blue.400" }} 
        mt={-0.5} _web={{ mb: -2 }}
      >
        Read More
      </Link>
    </Text>
  </Box>;
}

export function LinkUnderline() {
  return <Box alignItems="center">
    <Link 
      _text={{
        fontSize: "xl",
        _light: {
          color: "cyan.500"
        },
        color: "cyan.300"
      }}
      _hover={{
        _text: {
          _light: {
            color: "cyan.600"
          },
          color: "cyan.400"
        }
      }}
      href="https://nativebase.io" 
      isUnderlined 
    >
      Click me to open NativeBase website.
    </Link>
  </Box>;
}

export function LinkCustomOnPress() {
  const [ state, setState ] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return <Box alignItems="center">
    <Box h="100" w="100" bg={state ? "emerald.500" : "indigo.500"} />

    <Link onPress={toggleState} mt="8">
      <Box 
        px="3" py="2" bg="primary.400" rounded="sm" 
        _text={{
          color: "white",
          fontWeight: "medium"
        }}
      >
        Change Color
      </Box>
    </Link>
  </Box>;
}

export function LinkAroundContainers() {
  return <Box alignItems="center">
    <Link href="https://nativebase.io" isExternal>
      <Box 
        w={[ 64, 96 ]} borderWidth="1" borderColor="coolGray.300" 
        shadow="3" bg="coolGray.100" p="5" rounded="8"
      >
        <HStack alignItems="center">
          <Badge 
            colorScheme="darkBlue" 
            _text={{ color: "white" }} 
            variant="solid" rounded="4"
          >
            Open Source
          </Badge>

          <Spacer />

          <Text fontSize={10} color="coolGray.800">
            2020
          </Text>
        </HStack>

        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
          NativeBase v3
        </Text>

        <Text mt="2" fontSize="sm" color="coolGray.700">
          NativeBase is a component library that enables devs to build
          universal design systems.
        </Text>

        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
            Read More
          </Text>
        </Flex>
      </Box>
    </Link>
  </Box>;
}