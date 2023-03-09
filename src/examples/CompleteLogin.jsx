import { Center, Box, Heading, VStack, FormControl, Input, Checkbox, Button } from "native-base";

export default CompleteLogin = () => {
  return <Center w='100%'>
    <Box safeArea p='2' py='8' w='90%' maxW='290'>
      <Heading 
        size='lg' fontWeight='600' color='black'
        _dark={{ color: 'primary.600' }}
      >
        Welcome
      </Heading>

      <Heading 
        size='xs' mt='1' color='black' fontWeight='bold'
        _dark={{ color: 'primary.600' }}
      >
        Sign In to continue!
      </Heading>

      <VStack space={3} mt='3'>
        <FormControl isRequired >
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="jhondoe@gmail.com"/>
        </FormControl>

        <FormControl isRequired >
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" placeholder="1234"/>
        </FormControl>

        <FormControl isRequired>
          <Checkbox _text={{
            fontSize: 'xs',
            fontWeight: '500',
            color: 'primary.600'
          }}>
            Remember me
          </Checkbox>
        </FormControl>

        <Button>
          Sign In
        </Button>
      </VStack>
    </Box>
  </Center>;
}