import { Box, Button, VStack, Icon, Divider, Heading, Stack, ScrollView, Center } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export function BasicButton() {
  return <Box alignItems="center">
    <Button shadow={2} onPress={() => console.log("hello world")}>
      Click Me
    </Button>
  </Box>;
}

export function SizesButton() {
  return <VStack space={4} alignItems="center">
    {[ "xs", "sm", "md", "lg" ].map(size => (
      <Button key={size} size={size}>
        BUTTON
      </Button>
    ))}
  </VStack>;
}

function ButtonsElements({variant}) {
  return <Stack mb="2.5" mt="1.5" 
    direction={{
      base: "row",
      md: "row"
    }} 
    space={2} 
    mx={{
      base: "auto",
      md: "0"
    }}
  >
    <Button size="sm" variant={variant}>PRIMARY</Button>
    <Button size="sm" variant={variant} colorScheme="secondary">
      SECONDARY
    </Button>
    <Button size="sm" variant={variant} isDisabled>
      DISABLED
    </Button>
  </Stack>;
}

function StackElement({children}) {
  return <Stack mb="2.5" mt="1.5">
    {children}
  </Stack>;
}

export function ButtonVariants() {
  return <ScrollView showsVerticalScrollIndicator={false} px="3">
    <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
      { /* Solid */ }
      <Heading size="md">Solid</Heading>
      <StackElement>
        <ButtonsElements/>
      </StackElement>
      <Divider w="100%" />

      { /* Subtle */ }
      <Heading size="md">Subtle</Heading>
      <StackElement>
        <ButtonsElements variant="subtle"/>
      </StackElement>
      <Divider w="100%" />
      
      { /* Outline */ }
      <Heading size="md">Outline</Heading>
      <StackElement>
        <ButtonsElements variant="outline"/>
      </StackElement>
      <Divider w="100%" />

      { /* Link */ }
      <Heading size="md">Link</Heading>
      <StackElement>
        <ButtonsElements variant="link"/>
      </StackElement>
      <Divider w="100%" />

      { /* Ghost */ }
      <Heading size="md">Ghost</Heading>
      <StackElement>
        <ButtonsElements variant="ghost"/>
      </StackElement>
      <Divider w="100%" />

      {/* Unstyled */ }
      <Heading size="md">Unstyled</Heading>
      <StackElement>
        <Button variant="unstyled">Unstyled</Button>
      </StackElement>
    </VStack>
  </ScrollView>;
}

export function LoadingButtons() {
  return <Stack 
    direction={{
      base: "column",
      md: "row"
    }} 
    space={2} 
    alignItems={{
      base: "center",
      md: "flex-start"
    }}
  >
    <Button isLoading>Button</Button>
    <Button isLoading isLoadingText="Submitting">Button</Button>
    <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">Button</Button>
    
    <Button isLoading 
      _loading={{
        bg: "amber.400:alpha.70",
        _text: {
          color: "coolGray.700"
        }
      }} 
      _spinner={{
        color: "white"
      }} isLoadingText="Submitting"
    >
      Button
    </Button>

    <Button isLoading isLoadingText="Submitting" variant="outline">
      Button
    </Button>
  </Stack>;
}

export function IconButtons() {
  return <Stack 
    direction={{
      base: "column",
      md: "row"
    }} 
    space={4}
  >
    <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
      Upload
    </Button>
    
    <Button variant="subtle" endIcon={<Icon as={Ionicons} name="cloud-download-outline" size="sm" />}>
      Download
    </Button>
  </Stack>;
}