import {
  Center, 
  Button, 
  Text, 
  Stack,
  HStack,
  Switch, 
  useAccessibleColors, 
  useTheme,
  useContrastText
} from "native-base";
import { useState } from "react";

const ButtonTemplate = ({ shade }) => {
  const colorContrast = useContrastText(`emerald.${shade}`);
  
  return <Center>
    <Button 
      colorScheme="emerald" 
      key={`emerald.${shade}`} 
      bg={`emerald.${shade}`} 
      _text={{ color: colorContrast }} 
      mb={1}
    >
      Save
    </Button>
  </Center>;
};

export const UseAccessibleColors = () => {
  const [ value, setValue ] = useState(false);
  const [,, toggleAccessibleColors] = useAccessibleColors();
  const {
    colors
  } = useTheme();

  return <Center>
    <Stack space="3" direction={[ "column", "row" ]}>
      {Object.keys(colors.yellow).map((key, index) => {
        if (index > 2 && index < 9) return <ButtonTemplate shade={key} />;
      })}
    </Stack>

    <HStack mt="6" space="3">
      <Text>Toggle Accessible Colors</Text>

      <Switch 
        onValueChange={() => {
          setValue(!value);
          toggleAccessibleColors();
        }} 
        value={value}
        colorScheme="coolGray" 
      />
    </HStack>
  </Center>;
}