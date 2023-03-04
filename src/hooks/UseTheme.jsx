import { useTheme, Box } from 'native-base';

export function UseTheme() {
  const theme = useTheme();

  return <Box theme={theme}>
    {/* Do something with the theme */}
  </Box>;
}