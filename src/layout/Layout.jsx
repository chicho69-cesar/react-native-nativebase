import { NativeBaseProvider, Center } from "native-base";
import { MyAspectRatio } from "./MyAspectRatio";
import {
  Basic,
  BasicExtended,
  Composition,
  WithLinearGradientExpo,
  WithLinearGradientNative,
  WithRef
} from './MyBox';

export default Layout = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        {/* <MyAspectRatio/> */}

        {/* <Basic/> */}
        {/* <BasicExtended/> */}
        {/* <Composition/> */}
        {/* <WithLinearGradientExpo/> */}
        {/* <WithLinearGradientNative/> */}
        <WithRef/>
      </Center>
    </NativeBaseProvider>
  );
}