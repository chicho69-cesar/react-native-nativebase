import { NativeBaseProvider, Center, extendTheme, Button } from "native-base";

export default Theme = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  return <NativeBaseProvider theme={theme}>
    <Center flex={1} px="3">
      <Component/>
    </Center>
  </NativeBaseProvider>;
}

function Component() {
  return <Button 
    bg='tahiti.600' fontSize='2xl'
    shadow={4} w='72' rounded='xl'
  >
    Click Me
  </Button>;
}