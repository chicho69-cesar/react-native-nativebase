import { 
  Slide, Button, Alert, 
  Text, useColorModeValue, 
  Center, Box, Input, 
  Heading, VStack, HStack, 
  CheckIcon, Spacer, WarningIcon,
  useSafeArea
} from "native-base";
import { useState } from "react";

export function BasicSlide() {
  const [ isOpenTop, setIsOpenTop ] = useState(false);

  const str = `${isOpenTop ? "Hide" : "Check Internet Connection"}`;

  return <Center h="32">
    <Slide in={isOpenTop} placement="top">
      <Alert justifyContent="center" status="error" safeAreaTop={8}>
        <Alert.Icon />
        <Text color="error.600" fontWeight="medium">
          No Internet Connection
        </Text>
      </Alert>
    </Slide>

    <Button 
      onPress={() => setIsOpenTop(!isOpenTop)} 
      variant="unstyled" bg="coolGray.700:alpha.30" 
      _text={{
        color: useColorModeValue("darkText", "lightText")
      }}
    >
      {str}
    </Button>
  </Center>;
}

export function SlideWrapped() {
  const [ isOpen, setIsOpen ] = useState(false);

  return <Center>
    <Box w={["250", "300"]} justifyContent="center">
      <VStack space={3}>
        <HStack alignItems="flex-end">
          <Heading>Order</Heading>
        </HStack>

        <HStack alignItems="center" justifyContent="space-between">
          <Text fontWeight="medium">Sub Total</Text>
          <Text color="blueGray.400">$298.77</Text>
        </HStack>

        <HStack alignItems="center" justifyContent="space-between">
          <Text fontWeight="medium">Tax</Text>
          <Text color="blueGray.400">$38.84</Text>
        </HStack>

        <HStack alignItems="center" justifyContent="space-between">
          <Text fontWeight="medium">Total Amount</Text>
          <Text color="emerald.600">$337.61</Text>
        </HStack>

        <VStack space={2} mt="2">
          <Text bold>Promo Code</Text>
          <HStack space={3}>
            <Input flex="1" />
            <Button variant="outline">Apply</Button>
          </HStack>
        </VStack>

        <Button my="2" onPress={() => setIsOpen(!isOpen)}>
          Place Order
        </Button>
      </VStack>

      <Slide in={isOpen} placement="top">
        <Box 
          w="100%" position="absolute" p="2" 
          borderRadius="xs" bg="emerald.100" 
          alignItems="center" justifyContent="center" 
          _dark={{
            bg: "emerald.200"
          }} safeArea
        >
          <HStack space={2}>
            <CheckIcon 
              size="4" color="emerald.600" mt="1" 
              _dark={{
                color: "emerald.700"
              }} 
            />

            <Text 
              color="emerald.600" textAlign="center" 
              _dark={{
                color: "emerald.700"
              }} fontWeight="medium"
            >
              Order Placed Successfully.
            </Text>
          </HStack>
        </Box>
      </Slide>
    </Box>
  </Center>;
}

export function SlideComposition() {
  const [ isOpen, setIsOpen ] = useState(false);

  const safeAreaProps = useSafeArea({
    safeAreaTop: true
  });

  return <Center>
    <Box w={["250", "300"]}>
      <Box w="100%" alignItems="flex-start" justifyContent="center">
        <VStack space={3} w="100%">
          <HStack alignItems="flex-end">
            <Heading>Order</Heading>
            <Spacer />
            <WarningIcon color="orange.600" size="xs" mb="1.5" />
          </HStack>

          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium">Sub Total</Text>
            <Text color="blueGray.400">$298.77</Text>
          </HStack>

          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium">Tax</Text>
            <Text color="blueGray.400">$38.84</Text>
          </HStack>

          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight="medium">Total Amount</Text>
            <Text color="green.500">$337.61</Text>
          </HStack>

          <VStack space={2} mt="2">
            <Text bold>Promo Code</Text>
            <HStack space={3}>
              <Input flex="1" />
              <Button variant="outline">Apply</Button>
            </HStack>
          </VStack>

          <Button my="2" onPress={() => setIsOpen(!isOpen)}>
            Place Order
          </Button>
        </VStack>
      </Box>

      <Slide in={isOpen} placement="top">
        <Box 
          p="2" _text={{ color: "orange.600" }} 
          bg="orange.200" {...safeAreaProps}
        >
          Due to government restrictions around COVID- 19, you may experience
          a delay in your delivery.
        </Box>
      </Slide>
    </Box>
  </Center>;
}