import { Fab, Icon, Box, Center } from 'native-base';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export function BasicFab() {
  return <Center>
    <Box 
      height="200" w={[200, 300, 400]} 
      shadow="2" rounded="lg" 
      _dark={{
        bg: "coolGray.200:alpha.20"
      }} 
      _light={{
        bg: "coolGray.200:alpha.20"
      }}
    >
      <Fab 
        renderInPortal={false} 
        shadow={2} size="sm" 
        icon={
          <Icon 
            color="white" as={AntDesign} 
            name="plus" size="sm" 
          />
        } 
      />
    </Box>
  </Center>;
}

export function PlaceFab() {
  return <Center>
    <Box 
      height="200" w={[200, 300, 400]} 
      shadow="2" rounded="lg" 
      _dark={{
        bg: "coolGray.200:alpha.20"
      }} 
      _light={{
        bg: "coolGray.200:alpha.20"
      }}
    >
      <Fab 
        renderInPortal={false} shadow={2} 
        placement="top-right" size="sm" 
        icon={
          <Icon 
            color="white" as={MaterialIcons} 
            name="lightbulb" size="4" 
          />
        } 
        label="Quick Start" 
      />
    </Box>
  </Center>;
}

export function CustomPositionFab() {
  return <Center>
    <Box 
      height="200" w={[200, 300, 400]} 
      shadow="2" rounded="lg" 
      _dark={{
        bg: "coolGray.200:alpha.20"
      }} 
      _light={{
        bg: "coolGray.200:alpha.20"
      }}
    >
      <Fab 
        renderInPortal={false} shadow={2} 
        right={70} bottom={50} size="sm" 
        icon={
          <Icon 
            color="white" as={AntDesign} 
            name="plus" size="4" 
          />
        } 
      />
    </Box>
  </Center>;
}