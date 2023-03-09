import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center } from "native-base";

export function LoginForm() {
  return <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading 
        size="lg" fontWeight="600" color="coolGray.800" 
        _dark={{ color: "warmGray.50" }}
      >
        Welcome
      </Heading>

      <Heading 
        mt="1" _dark={{ color: "warmGray.200" }} 
        color="coolGray.600" fontWeight="medium" size="xs"
      >
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input />
        </FormControl>

        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />

          <Link 
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} 
            alignSelf="flex-end" mt="1"
          >
            Forget Password?
          </Link>
        </FormControl>

        <Button mt="2" colorScheme="indigo">
          Sign in
        </Button>

        <HStack mt="6" justifyContent="center">
          <Text 
            fontSize="sm" color="coolGray.600" 
            _dark={{ color: "warmGray.200" }}
          >
            I'm a new user.{" "}
          </Text>

          <Link 
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#"
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
}

export function SignUpForm() {
  return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading 
        size="lg" color="coolGray.800" 
        _dark={{ color: "warmGray.50" }} 
        fontWeight="semibold"
      >
        Welcome
      </Heading>

      <Heading 
        mt="1" color="coolGray.600" 
        _dark={{ color: "warmGray.200" }} 
        fontWeight="medium" size="xs"
      >
        Sign up to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>

        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>

        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        
        <Button mt="2" colorScheme="indigo">
          Sign up
        </Button>
      </VStack>
    </Box>
  </Center>;
}