import { Box, Flex, Divider, Text, Heading } from 'native-base';

export function DividerExample() {
  return <Box alignItems="center">
    <Flex direction="row" h="58" p="4">
      <Text>Simple</Text>
      <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
      <Text>Easy</Text>
      <Divider bg="amber.500" thickness="2" mx="2" orientation="vertical" />
      <Text>Beautiful</Text>
    </Flex>
  </Box>;
}

export function DividerBasic() {
  return <Box alignItems="center">
    <Box w="140">
      <Heading mx="3" alignItems="center" flexDirection="row">
        Chrome
      </Heading>

      <Divider 
        my="2" _light={{ bg: "muted.800" }} 
        _dark={{ bg: "muted.50" }} 
      />

      <Heading mx="3" alignItems="center" flexDirection="row">
        Firefox
      </Heading>
    </Box>
  </Box>;
}

export function DividerOrientation() {
  return <Box alignItems="center">
    <Box w="160">
      <Heading mx="auto">Shoes</Heading>
      <Divider 
        my="2" _light={{ bg: "muted.800" }} 
        _dark={{ bg: "muted.50" }} 
      />
      
      <Flex mx="3" direction="row" justify="space-evenly" h="60">
        <Heading py="2">Girls</Heading>
        <Divider 
          orientation="vertical" mx="3" 
          _light={{ bg: "muted.800" }} 
          _dark={{ bg: "muted.50" }} 
        />
        <Heading py="2">Boys</Heading>
      </Flex>
    </Box>
  </Box>;
}

export function CompositionDivider() {
  return <Box alignItems="center">
    <Flex direction="row" h="58" p="4">
      <Text>Simple</Text>
      <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
      <Text>Easy</Text>
      <Divider bg="indigo.500" thickness="2" mx="2" orientation="vertical" />
      <Text>Beautiful</Text>
    </Flex>
  </Box>;
}