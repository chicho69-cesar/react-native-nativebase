import { NativeBaseProvider, Center } from "native-base";
import { MyScrollView } from "./MyScrollView";
import { MyView } from "./MyView";

export default RNComponents = () => {
  return <NativeBaseProvider>
    <Center>
      {/* <MyScrollView/> */}

      <MyView/>
    </Center>
  </NativeBaseProvider>;
}