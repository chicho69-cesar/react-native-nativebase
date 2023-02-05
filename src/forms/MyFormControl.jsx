import { Box, FormControl, Stack, Input, WarningOutlineIcon, ScrollView, Divider, Text } from "native-base";

export function BasicFormControl() {
  return <Box alignItems="center">
    <Box w="100%" maxWidth="300px">
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>

          <Input type="password" defaultValue="12345" placeholder="password" />
          
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  </Box>;
}

export function FormCustomStyle() {
  return <ScrollView w="100%">
    <Stack space={2.5} alignSelf="center" px="4" 
      safeArea mt="4" 
      w={{
        base: "100%",
        md: "25%"
      }}
    >
      <Box>
        <Text bold fontSize="xl" mb="4">
          Default
        </Text>

        <FormControl mb="5">
          <FormControl.Label>Project Title</FormControl.Label>

          <Input />

          <FormControl.HelperText>
            Give your project a title.
          </FormControl.HelperText>
        </FormControl>

        <Divider />
      </Box>

      <Box>
        <Text bold fontSize="xl" mb="4">
          Disabled
        </Text>

        <FormControl isDisabled mb="5">
          <FormControl.Label 
            _disabled={{
              _text: {
                color: "gray.400",
                fontWeight: "bold"
              }
            }}
          >
            Project Title
          </FormControl.Label>

          <Input placeholder="Title" />

          <FormControl.HelperText>
            Give your project a title.
          </FormControl.HelperText>
        </FormControl>
        <Divider />
      </Box>

      <Box>
        <Text bold fontSize="xl" mb="4">
          Invalid
        </Text>

        <FormControl isInvalid>
          <FormControl.Label>Project Title</FormControl.Label>

          <Input placeholder="Title" />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
    </Stack>
  </ScrollView>;
}

export function ControlPassword() {
  return <Box w="100%">
    <FormControl isRequired>
      <Stack mx="4">
        <FormControl.Label>Password</FormControl.Label>

        <Input 
          _light={{
            bg: "coolGray.100",
            _hover: {
              bg: "coolGray.200"
            },
            _focus: {
              bg: "coolGray.200:alpha.70"
            }
          }} 
          _dark={{
            bg: "coolGray.800",
            _hover: {
              bg: "coolGray.900"
            },
            _focus: {
              bg: "coolGray.900:alpha.70"
            }
          }} 
          shadow={2} type="password" defaultValue="12345" 
          placeholder="password" 
        />

        <FormControl.HelperText>
          Must be atleast 6 characters.
        </FormControl.HelperText>
        
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  </Box>;
}