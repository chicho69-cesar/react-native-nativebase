import { Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export function NestingPseudoProps() {
  return (
    <Button 
      _hover={{ bg: 'red.500' }} 
      _pressed={{ bg: 'green.500' }}
    >
      Press and Hover here
    </Button>
  );
}

export function UnderstandingIcons() {
  return <Button 
    startIcon={
      <Icon 
        as={Ionicons} size="sm"
        name="cloud-upload-outline" 
      />
    } 
    _icon={{ color: 'coolGray.300' }} 
    _text={{ color: 'coolGray.300' }} 
    _hover={{
      _icon: { color: 'coolGray.50' },
      _text: { color: 'coolGray.50' }
    }}
  >
    Upload
  </Button>;
}