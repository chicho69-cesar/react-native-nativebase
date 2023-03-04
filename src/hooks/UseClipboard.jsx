import { useClipboard, Center, VStack, HStack, Input, Button } from 'native-base';
import { useState } from 'react';

export const UseClipboard = () => {
  const [ copyText, setCopyText ] = useState("Hello");
  const [ pasteText, setPasteText ] = useState("");
  const {
    value,
    onCopy
  } = useClipboard();

  return <Center>
    <VStack space={2} w="100%" maxW="300">
      <HStack space={3}>
        <Input 
          placeholder="Copy From" 
          onChangeText={v => setCopyText(v)} 
          value={copyText} 
        />
        
        <Button onPress={() => onCopy(copyText)}>
          Copy
        </Button>
      </HStack>

      <HStack space={3}>
        <Input 
          placeholder="Paste Here" 
          onChangeText={v => setPasteText(v)} 
          value={pasteText} 
        />
        
        <Button onPress={() => setPasteText(value)}>
          Paste
        </Button>
      </HStack>
    </VStack>
  </Center>;
};