import { NativeBaseProvider, Center } from "native-base";
import { MyCarousel } from "./MyCarousel";

export default Examples = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      <MyCarousel/>
    </Center>
  </NativeBaseProvider>;
}