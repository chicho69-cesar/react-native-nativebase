import { Select, Box, CheckIcon, Center, FormControl, WarningOutlineIcon } from "native-base";
import { useState } from "react";

export function BasicSelect() {
  const [ service, setService ] = useState("");

  return <Center>
    <Box maxW="300">
      <Select 
        selectedValue={service} minWidth="200" 
        accessibilityLabel="Choose Service" 
        placeholder="Choose Service" 
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} 
        mt={1} onValueChange={itemValue => setService(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </Box>
  </Center>;
}

export function FormControlledSelect() {
  return <Center>
    <FormControl w="3/4" maxW="300" isRequired isInvalid>
      <FormControl.Label>Choose service</FormControl.Label>
      <Select 
        minWidth="200" accessibilityLabel="Choose Service" 
        placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />
        }} mt="1"
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        Please make a selection!
      </FormControl.ErrorMessage>
    </FormControl>
  </Center>;
}