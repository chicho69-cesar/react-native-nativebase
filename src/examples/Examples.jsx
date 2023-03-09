import { NativeBaseProvider, Center, extendTheme } from "native-base";
import { theme } from "./theme";
import CustomBox from "./CustomBox";
import { MyCarousel } from "./MyCarousel";
import HorizontalBox from "./HorizontalBox";
import CustomCard from "./CustomCard";
import Login from "./CustomLogin";
import CompleteLogin from "./CompleteLogin";

export default Examples = () => {
  return <NativeBaseProvider theme={theme}>
    <Center flex={1} px="1">
      {/* <MyCarousel/> */}
      {/* <CustomBox/> */}
      {/* <HorizontalBox/> */}
      {/* <CustomCard/> */}
      <Login/>
      {/* <CompleteLogin/> */}
    </Center>
  </NativeBaseProvider>;
}