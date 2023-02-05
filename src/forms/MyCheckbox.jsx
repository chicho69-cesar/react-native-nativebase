import { 
  Box, 
  Center,
  Checkbox, 
  Container, 
  FormControl, 
  Heading,
  HStack, 
  Icon, 
  Stack, 
  Text, 
  VStack, 
  WarningOutlineIcon
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";

export function AcceptTerms() {
  return <HStack space={6}>
    <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
      I accept the terms & conditions
    </Checkbox>
  </HStack>;
}

export function BasicCheckbox() {
  return <HStack space={6}>
    <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
    <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
  </HStack>;
}

export function Controlled() {
  const [ groupValues, setGroupValues ] = useState([]);

  return <Checkbox.Group onChange={setGroupValues} value={groupValues} 
    accessibilityLabel="choose numbers"
  >
    <Checkbox value="one" my={2}>
      UX Research
    </Checkbox>

    <Checkbox value="two">Software Development</Checkbox>
  </Checkbox.Group>;
}

export function Uncontrolled() {
  return <Checkbox.Group accessibilityLabel="choose values">
    <Checkbox value="one" my={2}>
      UX Research
    </Checkbox>

    <Checkbox value="two">Software Development</Checkbox>
  </Checkbox.Group>;
}

export function Disabled() {
  return <VStack space={2}>
    <Checkbox isDisabled value="one">
      UX Research
    </Checkbox>

    <Checkbox isDisabled defaultIsChecked value="two">
      Software Development
    </Checkbox>
  </VStack>;
}

export function Invalid() {
  return <Checkbox isInvalid value="invalid">
    Software Development
  </Checkbox>;
}

export function CustomColor() {
  return <Box alignItems="center">
    <Stack 
      direction={{
        base: "column",
        md: "row"
      }} space={3} 
      alignItems="flex-start"
    >
      <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
        Danger
      </Checkbox>

      <Checkbox value="info" colorScheme="info" defaultIsChecked>
        Info
      </Checkbox>

      <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
        Orange
      </Checkbox>

      <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
        Purple
      </Checkbox>
    </Stack>
  </Box>;
}

export function CustomIcon() {
  return <Box alignItems="center">
    <Stack 
      direction={{
        base: "column",
        md: "row"
      }} space={3} 
      alignItems="flex-start"
    >
      <Checkbox value="orange" colorScheme="orange" size="md" 
        icon={<Icon as={<MaterialCommunityIcons name="bullseye" />} />} 
        defaultIsChecked
      >
        Darts
      </Checkbox>

      <Checkbox value="dark" colorScheme="dark" size="md" 
        icon={<Icon as={<MaterialCommunityIcons name="bat" />} />} 
        defaultIsChecked
      >
        Movie
      </Checkbox>

      <Checkbox colorScheme="red" value="red" size="md" 
        icon={<Icon as={<MaterialCommunityIcons name="campfire" />} />} 
        defaultIsChecked
      >
        Camping
      </Checkbox>

      <Checkbox value="blue" colorScheme="blue" size="md" 
        icon={<Icon as={<MaterialCommunityIcons name="chess-knight" />} />} 
        defaultIsChecked
      >
        Chess
      </Checkbox>
    </Stack>
  </Box>;
}

export function SizeCheckbox() {
  return <Center>
    <VStack space={3}>
      <Checkbox value="red" size="sm" defaultIsChecked>
        UX Research
      </Checkbox>

      <Checkbox size="md" defaultIsChecked value="green">
        UX Research
      </Checkbox>

      <Checkbox value="yellow" size="lg" defaultIsChecked>
        UX Research
      </Checkbox>
    </VStack>
  </Center>;
}

export function CheckboxGroup() {
  const [ groupValue, setGroupValue ] = useState(["Photography", "Gardening"]);
  
  return <Box alignItems="center">
    <VStack space={2}>
      <HStack alignItems="baseline">
        <Heading fontSize="lg">Hobbies</Heading>
      </HStack>

      <VStack>
        <Box>
          <Text>Selected: ({groupValue.length})</Text>
        </Box>
      </VStack>

      <Checkbox.Group colorScheme="green" defaultValue={groupValue} 
        accessibilityLabel="pick an item" 
        onChange={values => {
          setGroupValue(values || []);
        }}
      >
        <Checkbox value="Photography" my="1">
          Photography
        </Checkbox>

        <Checkbox value="Writing" my="1">
          Writing
        </Checkbox>

        <Checkbox value="Gardening" my="1">
          Gardening
        </Checkbox>

        <Checkbox value="Cooking" my="1">
          Cooking
        </Checkbox>
      </Checkbox.Group>
    </VStack>
  </Box>;
}

export function FormControlled() {
  const [ groupValue, setGroupValue ] = useState(["Phone", "Email"]);

  return <Box alignItems="center">
    <Container>
      <FormControl isInvalid>
        <FormControl.Label 
          _text={{
            fontSize: "lg",
            bold: true
          }}
        >
          Preferred contact method
        </FormControl.Label>

        <Text fontSize="md">Selected Values: </Text>

        <Checkbox.Group mt="2" colorScheme="green" defaultValue={groupValue} 
          accessibilityLabel="choose multiple items" 
          onChange={values => {
            setGroupValue(values || []);
          }} 
          alignItems="flex-start"
        >
          <Checkbox value="Phone" my="1">
            Phone
          </Checkbox>

          <Checkbox value="Email" my="1">
            Email
          </Checkbox>

          <Checkbox value="Message" my="1">
            Message
          </Checkbox>

          <Checkbox value="Fax" my="1">
            Fax
          </Checkbox>
        </Checkbox.Group>

        <FormControl.ErrorMessage 
          _stack={{
            alignItems: "flex-start"
          }} 
          leftIcon={<WarningOutlineIcon size="xs" mt={1} />}
        >
          You must select at least three methods
        </FormControl.ErrorMessage>
      </FormControl>
    </Container>
  </Box>;
}

export function CheckboxWithRef() {
  const myRef = useRef();
  const [ bg, setBg ] = useState("#fa000050");

  useEffect(() => {
    const styleObj = {
      backgroundColor: bg
    };

    myRef.current.setNativeProps({
      style: styleObj
    });
  }, [ myRef, bg ]);

  return <Box alignItems="flex-start">
    <Checkbox value="success" colorScheme="success" 
      icon={<Icon as={MaterialCommunityIcons} name="bullseye" opacity={1} />} 
      wrapperRef={myRef} onChange={state => {
        if (state) {
          setBg("#00de0050");
        } else {
          setBg("#fa000050");
        }
      }}
    >
      Archery
    </Checkbox>
  </Box>;
}