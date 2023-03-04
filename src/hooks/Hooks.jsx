import { NativeBaseProvider, Center } from "native-base";
import { UseAccessibleColors } from "./UseAccessibleColors";
import { UseBreakpointValue } from "./UseBreakpointValue";
import { UseClipboard } from "./UseClipboard";
import { UseColorMode } from "./UseColorMode";
import { UseColorModeValue } from "./UseColorModeValue";
import { UseContrastText } from "./UseContrastText";
import { UseDisclose } from "./UseDisclose";
import { MaxHeight, MinWidth, Orientation } from "./UseMediaQuery";
import { UseTheme } from "./UseTheme";
import { UseToken } from "./UseToken";

export default Hooks = () => {
  return <NativeBaseProvider>
    <Center flex={1} px="3">
      {/* <UseDisclose/> */}
      {/* <UseBreakpointValue/> */}
      {/* <UseClipboard/> */}

      {/* <MaxHeight/> */}
      {/* <MinWidth/> */}
      {/* <Orientation/> */}

      {/* <UseTheme/> */}
      {/* <UseToken/> */}
      {/* <UseColorMode/> */}
      {/* <UseColorModeValue/> */}
      {/* <UseContrastText/> */}
      <UseAccessibleColors/>
    </Center>
  </NativeBaseProvider>;
}