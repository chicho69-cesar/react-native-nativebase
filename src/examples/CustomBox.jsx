import { 
  AspectRatio, 
  Box,
  Icon, 
  Image, 
  Stack, 
  Text, 
  VStack 
} from "native-base"
import { Entypo } from "@expo/vector-icons";

export default CustomBox = () => {
  return <>
    <Box bg="primary.300" rounded="lg" alignItems='center'>
      <Box maxW='4/5' overflow='hidden'>
        <AspectRatio w='2/3' ratio={9 / 16}>
          <Image
            rounded='lg'
            shadow={3}
            source={{
              uri: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/baaac655eb8a9c262752b84f8f087ac9.jpe'
            }}
            alt='Hanamichi'
          />
        </AspectRatio>

        <Stack 
          position='absolute' top='4' left='4'
          backgroundColor='gray.700' padding='3'
          rounded='xl' shadow={3}
        >
          <Icon 
            as={Entypo} name='heart' 
            color='white' size='6xl'
          />
        </Stack>
      </Box>

      <VStack padding='5'>
        <Text 
          fontSize='2xl' color='gray.700'
          fontWeight='semibold'
        >
          Hanamichi Sakuragi
        </Text>
      </VStack>
    </Box>
  </>;
}