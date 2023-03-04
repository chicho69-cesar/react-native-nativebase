import { 
  useContrastText,
  Center, 
  VStack, 
  Button,
} from "native-base";

export const UseContrastText = () => {
  const bgDark = "gray.900";
  const bgLight = "gray.50";

  const colorContrastDark = useContrastText(bgDark);
  const colorContrastLight = useContrastText(bgLight);
  
  return <Center>
    <VStack space="4">
      <Button bg={bgDark} _text={{ color: colorContrastDark }}>
        NativeBase
      </Button>

      <Button bg={bgLight} _text={{ color: colorContrastLight }}>
        NativeBase
      </Button>
    </VStack>
  </Center>;
}