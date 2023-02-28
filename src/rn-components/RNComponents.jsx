import { NativeBaseProvider, Center } from "native-base";
import { MyFlatList } from "./MyFlatList";
import { MyKeyboardAvoidingView } from "./MyKeyboardAvoidingView";
import { MyScrollView } from "./MyScrollView";
import { MySectionList } from "./MySectionList";
import { MyView } from "./MyView";

export default RNComponents = () => {
  return <NativeBaseProvider>
    <Center>
      {/* <MyScrollView/> */}
      {/* <MyView/> */}
      {/* <MyKeyboardAvoidingView/> */}
      {/* <MyFlatList/> */}
      <MySectionList/>
    </Center>
  </NativeBaseProvider>;
}