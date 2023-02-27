import { NativeBaseProvider, Center } from "native-base";
import { MyScrollView } from "./MyScrollView";

export default RNComponents = () => {
  return <NativeBaseProvider>
    <Center>
      <MyScrollView/>
    </Center>
  </NativeBaseProvider>;
}