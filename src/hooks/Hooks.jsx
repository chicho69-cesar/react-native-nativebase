import { NativeBaseProvider, Center } from "native-base";
import { UseBreakpointValue } from "./UseBreakpointValue";
import { UseClipboard } from "./UseClipboard";
import { UseDisclose } from "./UseDisclose";
import { MaxHeight, MinWidth, Orientation } from "./UseMediaQuery";

export default Hooks = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <UseDisclose/> */}
      {/* <UseBreakpointValue/> */}
      {/* <UseClipboard/> */}

      {/* <MaxHeight/> */}
      {/* <MinWidth/> */}
      <Orientation/>
    </Center>
  </NativeBaseProvider>;
}