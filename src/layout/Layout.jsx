import { NativeBaseProvider, Center } from "native-base";
import { MyAspectRatio } from "./MyAspectRatio";
import {
  // Basic,
  BasicExtended,
  Composition,
  WithLinearGradientExpo,
  WithLinearGradientNative,
  WithRef
} from './MyBox';
import { Basic, IconFrames, SquareAndCircle } from "./MyCenter";
import { MyContainer } from "./MyContainer";

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
        {/* <WithRef/> */}

        {/* <Basic/> */}
        {/* <IconFrames/> */}
        {/* <SquareAndCircle/> */}
        
        <MyContainer/>
      </Center>
    </NativeBaseProvider>
  );
}