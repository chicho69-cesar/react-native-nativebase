import { IconButton, Icon, Center, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export function BasicIconButton() {
  return <IconButton icon={<Icon as={Entypo} name="emoji-happy" />} 
    borderRadius="full" 
    _icon={{
      color: 'orange.500',
      size: 'md'
    }} 
    _hover={{
      bg: 'orange.600:alpha.20'
    }} 
    _pressed={{
      bg: 'orange.600:alpha.20',
      _icon: {
        name: 'emoji-flirt'
      },
      _ios: {
        _icon: {
          size: '2xl'
        }
      }
    }} 
    _ios={{
      _icon: {
        size: '2xl'
      }
    }} 
  />;
}

export function SizesIconButton() {
  return <Center>
    <VStack space={4} alignItems="center">
      {[ "xs", "sm", "md", "lg" ].map(size => 
        <IconButton size={size} variant="solid" 
          _icon={{
            as: MaterialIcons,
            name: "menu"
          }} 
        />
      )}
    </VStack>
  </Center>;
}

export function VariantsIconButton() {
  return <Center>
    <VStack space={4} alignItems="center">
      {[ "outline", "solid", "ghost" ].map(variant => 
        <IconButton colorScheme="indigo" 
          key={variant} variant={variant} 
          _icon={{
            as: AntDesign,
            name: "search1"
          }} 
        />
      )}
    </VStack>
  </Center>;
}