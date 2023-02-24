import { Center, Button, PresenceTransition } from "native-base";
import { useState } from "react";

export function Fade() {
  const [ isOpen, setIsOpen ] = useState(false);
  
  return <Center>
    <Button onPress={() => setIsOpen(!isOpen)}>
      {isOpen ? "Hide" : "Show"}
    </Button>

    <PresenceTransition 
      visible={isOpen} 
      initial={{
        opacity: 0
      }} 
      animate={{
        opacity: 1,
        transition: {
          duration: 250
        }
      }}
    >
      <Center 
        mt="7" bg="teal.500" rounded="md" 
        w="200" h="100" _text={{ color: "white" }}
      >
        Fade
      </Center>
    </PresenceTransition>
  </Center>;
}

export function ScaleFade() {
  const [ isOpen, setIsOpen ] = useState(false);

  return <Center>
    <Button onPress={() => setIsOpen(!isOpen)}>
      {isOpen ? "Hide" : "Show"}
    </Button>

    <PresenceTransition 
      visible={isOpen} 
      initial={{
        opacity: 0,
        scale: 0
      }} 
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 250
        }
      }}
    >
      <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
        ScaleFade
      </Center>
    </PresenceTransition>
  </Center>;
}