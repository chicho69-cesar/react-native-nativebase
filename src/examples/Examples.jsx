import { NativeBaseProvider, Center, extendTheme } from "native-base";
import { theme } from "./theme";
import CustomBox from "./CustomBox";
import { MyCarousel } from "./MyCarousel";
import HorizontalBox from "./HorizontalBox";

export default Examples = () => {
  return <NativeBaseProvider theme={theme}>
    <Center flex={1} px="3">
      {/* <MyCarousel/> */}
      {/* <CustomBox/> */}
      <HorizontalBox/>
    </Center>
  </NativeBaseProvider>;
}