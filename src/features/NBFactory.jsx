import { useRef } from 'react';
import { Factory, Stack, Button } from "native-base";
import { View, TextInput } from "react-native";

export function BasicFactory() {
  const FactoryView = Factory(View);
  return <FactoryView bg="emerald.400" borderRadius={4} size={16} />;
}

export function DefiningComponentTheme() {
  const FactoryView = Factory(View, {
    baseStyle: {
      bg: "cyan.300",
      borderRadius: "md"
    }
  });

  return <FactoryView height={50} width={50} />;
}

export function UsingMode() {
  const FactoryView = Factory(View, {
    baseStyle: props => {
      return {
        bg: themeTools.mode("rose.500", "cyan.300")(props),
        borderRadius: "md"
      };
    }
  });

  return <FactoryView height={50} width={50} />;
}

export function UsingRefFactory() {
  const NBInput = Factory(TextInput);
  const inputRef = useRef(null);

  return <Stack space={4} w='90%'>
    <NBInput 
      placeholder="Click on the button" ref={inputRef} 
      p="2" borderWidth="1" borderColor="cyan.400" 
      borderRadius="md" _dark={{ color: "trueGray.200" }} 
    />

    <Button 
      colorScheme="emerald" 
      onPress={() => {
        inputRef.current.focus();
      }}
    >
      Set Focus
    </Button>
  </Stack>;
}