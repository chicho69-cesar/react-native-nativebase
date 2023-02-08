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
import { FlexExample, WithSpacer } from "./MyFlex";
import { HStackExample, BasicHStack } from "./MyHStack";
import { MyStack } from "./MyStack";
import { VStackExample, BasicVStack } from "./MyVStack";
import { ZStackExample, BasicZStack, CenterZStack } from "./MyZStack";

export default Layout = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <MyAspectRatio/>

        {/* <Basic/> */}
        {/* <BasicExtended/> */}
        {/* <Composition/> */}
        {/* <WithLinearGradientExpo/> */}
        {/* <WithLinearGradientNative/> */}
        {/* <WithRef/> */}

        {/* <Basic/> */}
        {/* <IconFrames/> */}
        {/* <SquareAndCircle/> */}
        
        {/* <MyContainer/> */}

        {/* <FlexExample/> */}
        {/* <WithSpacer/> */}

        {/* <HStackExample/> */}
        {/* <BasicHStack/> */}

        {/* <MyStack/> */}

        {/* <VStackExample/> */}
        {/* <BasicVStack/> */}

        {/* <ZStackExample/> */}
        {/* <BasicZStack/> */}
        {/* <CenterZStack/> */}
      </Center>
    </NativeBaseProvider>
  );
}