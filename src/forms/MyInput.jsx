import { 
  Box, 
  Input, 
  Stack, 
  InputGroup, 
  InputLeftAddon, 
  InputRightAddon,
  Pressable,
  Icon,
  Button,
  WarningOutlineIcon,
  FormControl
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export function InputExample() {
  return <Box alignItems="center">
    <Input mx="3" placeholder="Name..." w="100%" />
  </Box>;
}

export function InputSizes() {
  return <Stack space={4} w="75%" maxW="300px" mx="auto">
    <Input size="xs" placeholder="xs Input" />
    <Input size="sm" placeholder="sm Input" />
    <Input size="md" placeholder="md Input" />
    <Input size="lg" placeholder="lg Input" />
    <Input size="xl" placeholder="xl Input" />
    <Input size="2xl" placeholder="2xl Input" />
  </Stack>;
}

export function InputVariants() {
  return <Stack space={4} w="75%" maxW="300px" mx="auto">
    <Input variant="outline" placeholder="Outline" />
    <Input variant="filled" placeholder="Filled" />
    <Input variant="underlined" placeholder="Underlined" />
    <Input variant="unstyled" placeholder="Unstyled" />
    <Input variant="rounded" placeholder="Round" />
  </Stack>;
}

export function InputAdons() {
  return <Stack alignItems="center">
    <InputGroup 
      w={{
        base: "70%",
        md: "285"
      }}
    >
      <InputLeftAddon children={"https://"} />
      <Input 
        w={{
          base: "70%",
          md: "100%"
        }} 
        placeholder="nativebase" 
      />
      <InputRightAddon children={".io"} />
    </InputGroup>
  </Stack>;
}

export function InputElements() {
  const [ show, setShow ] = useState(false);

  return <Stack space={4} w="100%" alignItems="center">
    <Input 
      w={{
        base: "75%", md: "25%"
      }} 
      InputLeftElement={
        <Icon 
          as={<MaterialIcons name="person" />} 
          size={5} ml="2" color="muted.400" 
        />
      } 
      placeholder="Name" 
    />

    <Input 
      w={{
        base: "75%", md: "25%"
      }} 
      type={show ? "text" : "password"} 
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon 
            as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
            size={5} mr="2" color="muted.400" 
          />
        </Pressable>
      } 
      placeholder="Password" 
    />
  </Stack>;
}

export function PasswordInput() {
  const [ show, setShow ] = useState(false);

  const handleClick = () => setShow(!show);

  return <Box alignItems="center">
    <Input 
      type={show ? "text" : "password"} 
      w="100%" py="0" 
      InputRightElement={
        <Button 
          size="xs" rounded="none" w="1/6" 
          h="full" onPress={handleClick}
        >
          {show ? "Hide" : "Show"}
        </Button>
      } 
      placeholder="Password" 
    />
  </Box>;
}

export function ControlledInput() {
  const [ value, setValue ] = useState("");

  const handleChange = text => setValue(text);

  return <Box alignItems="center">
    <Input 
      value={value} w="100%" 
      onChangeText={handleChange} 
      placeholder="Value Controlled Input" 
    />
  </Box>;
}

export function FormControlledInput() {
  <Box alignItems="center">
    <FormControl isInvalid w="75%" maxW="300px">
      <FormControl.Label>Password</FormControl.Label>
      <Input placeholder="Enter password" />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        Try different from previous passwords.
      </FormControl.ErrorMessage>
    </FormControl>
  </Box>;
}