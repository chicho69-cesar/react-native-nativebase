import { NativeBaseProvider, Center } from "native-base";
import { MyKeyboardAvoidingView } from "./MyKeyboardAvoidingView";
import { MyScrollView } from "./MyScrollView";
import { MyView } from "./MyView";

export default RNComponents = () => {
  return <NativeBaseProvider>
    <Center>
      {/* <MyScrollView/> */}
      {/* <MyView/> */}
      <MyKeyboardAvoidingView/>
    </Center>
  </NativeBaseProvider>;
}