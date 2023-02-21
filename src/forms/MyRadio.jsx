import { Radio, Icon, Container, FormControl, WarningOutlineIcon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useRef } from "react";

export function RadioExample() {
  const [ value, setValue ] = useState("one");
  
  return <Radio.Group 
    name="myRadioGroup" accessibilityLabel="favorite number" 
    value={value} onChange={nextValue => {
      setValue(nextValue);
    }}
  >
    <Radio value="one" my={1}>
      One
    </Radio>

    <Radio value="two" my={1}>
      Two
    </Radio>
  </Radio.Group>;
}

export function UncontrolledRadio() {
  return <Radio.Group 
    defaultValue="1" name="myRadioGroup" 
    accessibilityLabel="Pick your favorite number"
  >
    <Radio value="1" my={1}>
      First
    </Radio>

    <Radio value="2" my={1}>
      Second
    </Radio>
    
    <Radio value="3" my={1}>
      Third
    </Radio>
  </Radio.Group>;
}

export function DisabledRadio() {
  return <Radio.Group 
    defaultValue="2" name="exampleGroup" 
    accessibilityLabel="select prize"
  >
    <Radio value="1" my={1} isDisabled>
      First
    </Radio>

    <Radio value="2" my={1}>
      Second
    </Radio>

    <Radio value="3" my={1}>
      Third
    </Radio>
  </Radio.Group>;
}

export function InvalidRadio() {
  return <Radio.Group 
    name="exampleGroup" 
    accessibilityLabel="select an option"
  >
    <Radio value="test" isInvalid>
      Others
    </Radio>
  </Radio.Group>;
}

export function CustomColorRadio() {
  return <Radio.Group 
    defaultValue="1" name="exampleGroup" 
    accessibilityLabel="favorite colorscheme"
  >
    <Radio colorScheme="emerald" value="1" my={1}>
      emerald
    </Radio>

    <Radio colorScheme="secondary" value="2" my={1}>
      secondary
    </Radio>

    <Radio colorScheme="warning" value="3" my={1}>
      warning
    </Radio>
  </Radio.Group>;
}

export function CustomIconRadio() {
  return <Radio.Group 
    defaultValue="1" size="lg" name="exampleGroup" 
    accessibilityLabel="pick a choice"
  >
    <Radio 
      _text={{ mx: 2 }} colorScheme="green" value="1" 
      icon={<Icon as={<MaterialCommunityIcons name="alien" />} />} my={1}
    >
      Alien
    </Radio>

    <Radio 
      _text={{ mx: 2 }} colorScheme="red" value="2" 
      icon={<Icon as={<MaterialCommunityIcons name="fire" />} />} my={1}
    >
      Fire
    </Radio>

    <Radio colorScheme="warning" _text={{ mx: 2}} value="3" icon={<Icon as={<MaterialCommunityIcons name="exclamation" />} />} my={1}>
      Warning
    </Radio>
  </Radio.Group>;
}

export function FormControlledRadio() {
  const [ groupValue, setGroupValue ] = useState("1");
  
  return <Container>
    <FormControl isInvalid>
      <FormControl.Label 
        _text={{
          fontSize: "lg",
          bold: true
        }}
      >
        Select Prize
      </FormControl.Label>

      <Radio.Group 
        name="exampleGroup" accessibilityLabel="select prize" 
        defaultValue={groupValue} onChange={value => {
          setGroupValue(value || "");
          console.log({ groupValue });
        }}
      >
        <Radio value="1" my="1">
          First
        </Radio>

        <Radio value="2" my="1">
          Second
        </Radio>

        <Radio value="3" my="1">
          Third
        </Radio>
      </Radio.Group>

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        You must select a Prize.
      </FormControl.ErrorMessage>
    </FormControl>
  </Container>;
}

export function RadioWithRef() {
  const myRef = useRef({});

  const handleRef = value => {
    if (value === "2") {
      if (Platform.OS !== "web") myRef.current.setNativeProps({
        backgroundColor: "#00de0050"
      });
    } else {
      if (Platform.OS !== "web") myRef.current.setNativeProps({
        backgroundColor: "#fa000050"
      });
    }
  }

  return <Radio.Group 
    name="exampleGroup" colorScheme="success" 
    accessibilityLabel="pick an option" 
    onChange={value => handleRef(value)}
  >
    <Radio colorScheme="success" ref={myRef} value="1" my={1}>
      Wrong
    </Radio>

    <Radio colorScheme="success" ref={myRef} value="2" my={1}>
      Right
    </Radio>
  </Radio.Group>;
}