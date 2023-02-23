import { Box, Badge, HStack, VStack, Button } from "native-base";
import { useState } from "react";

export function BadgeExample() {
  return <Box alignItems="center">
    <Badge>NEW FEATURE</Badge>
  </Box>;
}

export function ColorSchemaBadge() {
  return <HStack 
    space={{ base: 2, sm: 4 }} 
    mx={{ base: "auto", md: 0 }}
  >
    <Badge colorScheme="success">SUCCESS</Badge>
    <Badge colorScheme="danger">DANGER</Badge>
    <Badge colorScheme="info">INFO</Badge>
    <Badge colorScheme="coolGray">DARK</Badge>
  </HStack>;
}

export function VariantBadges() {
  return <Box alignItems="center">
    <HStack space={4} mx={{ base: "auto", md: "0" }}>
      {[ "solid", "outline", "subtle" ].map(key => {
        return <VStack key={key} space={4}>
          <Badge variant={key} alignSelf="center">
            DEFAULT
          </Badge>

          <Badge colorScheme="success" alignSelf="center" variant={key}>
            SUCCESS
          </Badge>

          <Badge colorScheme="error" alignSelf="center" variant={key}>
            ERROR
          </Badge>

          <Badge colorScheme="info" alignSelf="center" variant={key}>
            INFO
          </Badge>

          <Badge colorScheme="warning" alignSelf="center" variant={key}>
            WARNING
          </Badge>
        </VStack>
      })}
    </HStack>
  </Box>;
}

export function CompositionBadge() {
  const [ notifications, setNotifications ] = useState(0);

  return <Box alignItems="center">
    <VStack>
      <Badge // bg="red.400"
        colorScheme="danger" rounded="full" 
        mb={-4} mr={-4} zIndex={1} variant="solid" 
        alignSelf="flex-end" _text={{ fontSize: 12 }}
      >
        {notifications}
      </Badge>

      <Button 
        mx={{ base: "auto", md: 0 }} p="2" 
        bg="cyan.500" _text={{ fontSize: 14 }}
        onPress={() => setNotifications(notifications + 1)}
      >
        Notifications
      </Button>
    </VStack>
  </Box>;
}